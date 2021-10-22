import React from 'react';
import callJsonEndpoint, {BearerTokenSendingCommand} from "./util/api/callJsonEndpoint";
import useEndpoint from "./hooks/useEndpoint";
import BearerTokenService from "./service/BearerTokenService";

function ApiCallTestComponent() {
    const usedEndpoint = useEndpoint({
        conf: {
            url: "/treatment-plans",
        },
        onSuccess: (resp) => {
            console.log(resp.data);
        },
        enableRequest: false,
    })

    return (
        <div>
            <button onClick={() => callJsonEndpoint({
                conf: {
                    url: "/treatment-plans",
                },
            }).catch(err => console.log(err))
            }
            >get treatment plans req
            </button>
            <br/>
            <button onClick={() => callJsonEndpoint({
                conf: {
                    url: "/auth/local",
                    method: 'post',
                    data: {
                        identifier: 'test1',
                        password: 'password'
                    }
                },
                bearerTokenSendingCommand: BearerTokenSendingCommand.DO_NOT_SEND,
            }).then(resp => {
                BearerTokenService.setToken(resp.data['jwt']);
            })
                .catch(err => console.log(err))
            }
            >login req
            </button>
            <br/>
            <button onClick={() => usedEndpoint.reloadEndpoint()}>reload usedEndpoint</button>
        </div>
    );
}

export default ApiCallTestComponent;
