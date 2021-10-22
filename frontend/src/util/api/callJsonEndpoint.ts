import axios, {AxiosPromise, AxiosRequestConfig, AxiosResponse} from "axios";
import FrontendApiCallException from "../../exception/FrontendApiCallException";
import Exception from "../../exception/Exception";
import BearerTokenService from "../../service/BearerTokenService";

export const HEADER_NAME_AUTHORIZATION = 'Authorization';

export enum BearerTokenSendingCommand {
    AUTO = 1,
    SEND = 2,
    DO_NOT_SEND = 3
}

const extractExceptionFromResponse = (
    wasResponseReceived: boolean,
    axiosResponse: AxiosResponse | null,
    axiosRequestConfig: AxiosRequestConfig | null,
    payload: any
): Exception => {
    console.error("Error in callJsonEndpoint! wasResponseReceived: " + wasResponseReceived, [axiosResponse, axiosRequestConfig, payload]);

    if (!wasResponseReceived) {
        return new FrontendApiCallException("Cannot reach the servers.", {
            wasResponseReceived,
            axiosRequestConfig
        });
    }

    return new FrontendApiCallException(
        "Error response received from the servers. Response code is not success!",
        {
            wasResponseReceived,
            axiosResponse,
            axiosRequestConfig,
            payload,
        }
    );
};

async function prepareRequestConfig(axiosRequestConfig: AxiosRequestConfig,
                                    insertJsonContentType: boolean,
                                    bearerTokenSendingCommand: BearerTokenSendingCommand) {
    if (!axiosRequestConfig.method) {
        axiosRequestConfig.method = "GET";
    }

    if (!axiosRequestConfig.headers) {
        axiosRequestConfig.headers = {};
    }

    if (insertJsonContentType) {
        axiosRequestConfig.headers["Content-type"] = "application/json";
        axiosRequestConfig.headers["accept"] = "application/json";
    }

    async function includeBearerToken() {
        axiosRequestConfig.headers[HEADER_NAME_AUTHORIZATION] = 'Bearer ' + await BearerTokenService.getToken();
    }

    switch (bearerTokenSendingCommand) {
        case BearerTokenSendingCommand.AUTO:
            //Send it by default, no more rules here
            await includeBearerToken();
            break;
        case BearerTokenSendingCommand.SEND:
            await includeBearerToken();
            break;
        case BearerTokenSendingCommand.DO_NOT_SEND:
            //Not setting the token
            break;
    }

    axiosRequestConfig.validateStatus = (status: number) => {
        return true; // Always returning true to handle all HTTP response codes and be able to extract the bodies
    };
}

function isUndefined(val) {
    return typeof val === "undefined";
}

async function prepareCommand(command: CallJsonEndpointCommand): Promise<void> {
    if (isUndefined(command.acceptedResponseCodes)) {
        command.acceptedResponseCodes = [200];
    }
    if (isUndefined(command.bearerTokenSendingCommand)) {
        command.bearerTokenSendingCommand = BearerTokenSendingCommand.AUTO;
    }
    if (isUndefined(command.insertJsonContentType)) {
        command.insertJsonContentType = !!command.conf.data;
    }

    await prepareRequestConfig(command.conf, command.insertJsonContentType, command.bearerTokenSendingCommand);
}

export interface CallJsonEndpointCommand {
    conf: AxiosRequestConfig;
    /**
     * response codes counted as success
     */
    acceptedResponseCodes?: Array<number>;
    bearerTokenSendingCommand?: BearerTokenSendingCommand;
    /**
     * set to false to not to insert the JSON Content-Type adn accept headers
     */
    insertJsonContentType?: boolean;
}

const callJsonEndpoint = async <ReturnType>(command: CallJsonEndpointCommand): Promise<AxiosResponse<ReturnType>> => {
    await prepareCommand(command);

    const axiosPromise: AxiosPromise<ReturnType> = axios(command.conf) as AxiosPromise<ReturnType>;

    return axiosPromise
        .catch((err) => {
            //This catch clause is intentionally put before the then clause to not to catch exceptions thrown there (there = then clause)
            throw extractExceptionFromResponse(false, null, command.conf, err);
        })
        .then((response) => {
            if (command.acceptedResponseCodes.includes(response.status)) {
                return response;
            }

            throw extractExceptionFromResponse(true, response, command.conf, null);
        });
};

export default callJsonEndpoint;