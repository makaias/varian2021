import React from 'react';
import logo from './logo.svg';
import './App.css';
import callJsonEndpoint, {BearerTokenSendingCommand} from "./util/api/callJsonEndpoint";

function App() {
    return (
        <div className="App">
            <button onClick={() => callJsonEndpoint({
                conf: {
                    url: "/api/randomtest",
                },
                bearerTokenSendingCommand: BearerTokenSendingCommand.DO_NOT_SEND,
            }).catch(err => console.log(err))}>test req 1
            </button>
            <button onClick={() => callJsonEndpoint({
                conf: {
                    url: "/api/randomtest",
                },
                bearerTokenSendingCommand: BearerTokenSendingCommand.DO_NOT_SEND,
            }).catch(err => console.log(err))}>login req
            </button>
        </div>
    );
}

export default App;
