import React from 'react';
import callJsonEndpoint, {BearerTokenSendingCommand} from "./util/api/callJsonEndpoint";

function ApiCallTestComponent() {
    return (
        <div className="App">
            <button onClick={() => callJsonEndpoint({
                conf: {
                    url: "/api/threatment-plans",
                },
            }).catch(err => console.log(err))}>get treatment plans req
            </button>
            <br/>
            <button onClick={() => callJsonEndpoint({
                conf: {
                    url: "/auth/local",
                    method:'post',
                    data:{
                        identifier: 'test1',
                        password: 'password'
                    }
                },
                bearerTokenSendingCommand: BearerTokenSendingCommand.DO_NOT_SEND,
            }).catch(err => console.log(err))}>login req
            </button>
        </div>
    );
}

export default ApiCallTestComponent;
