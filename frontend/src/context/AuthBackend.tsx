import React, {createContext, FunctionComponent, ReactNode, useContext, useEffect, useState} from 'react';
import LoginWall from '../component/login/LoginWall';
import callJsonEndpoint, {BearerTokenSendingCommand} from '../util/api/callJsonEndpoint';
import BearerTokenService from "../service/BearerTokenService";
import {LoginCommand} from "../component/login/LoginForm";


export interface User {
    id: number;
    username: string;
    //all other strapi user stuff here
}

export interface AuthBackend {
    user: User;
    isLoggedIn: boolean;
    logout: () => Promise<void>;
}

export const AuthBackendContext = createContext<AuthBackend>({
    user: null,
    isLoggedIn: null,
    logout: null,
});

interface Props {
    children: ReactNode;
}


const AuthBackend: FunctionComponent = ({children}: Props): JSX.Element => {

    const [user, setUser] = useState<User>(null);

    function shouldApplyLoginWallOnCurrentPath(): boolean {
        return true;
    }

    function tryToReuseSavedBearerToken() {
        if (!BearerTokenService.isTokenSet()) {
            return;
        }

        callJsonEndpoint<User>({
            conf: {
                url: "/users/me",
            },
            bearerTokenSendingCommand: BearerTokenSendingCommand.SEND,
        })
            .then((resp) => {
                setUser(resp.data);
            })
            .catch(() => false);
    }

    useEffect(() => {
        tryToReuseSavedBearerToken();
    }, []);

    function isLoggedIn(): boolean {
        return !!user;
    }

    async function logout(): Promise<void> {
        return new Promise((resolve) => {
            BearerTokenService.deleteToken();
            setUser(null);
            resolve();
        });
    }

    async function attemptLogin(loginCommand: LoginCommand): Promise<void> {
        return callJsonEndpoint({
            conf: {
                url: "/auth/local",
                method: 'post',
                data: {
                    identifier: loginCommand.identifier,
                    password: loginCommand.password,
                }
            },
            bearerTokenSendingCommand: BearerTokenSendingCommand.DO_NOT_SEND,
        }).then(resp => {
            BearerTokenService.setToken(resp.data['jwt']);
            setUser(resp.data['user']);
            console.log('Login succeeded');
        });
    }

    const contextValue: AuthBackend = {
        user: user,
        isLoggedIn: isLoggedIn(),
        logout: logout
    };

    function getPageContent(): ReactNode {
        if (!shouldApplyLoginWallOnCurrentPath()) {
            return children;
        }

        if (isLoggedIn()) {
            return children;
        }
        return <LoginWall onLogin={attemptLogin}/>;
    }

    return <AuthBackendContext.Provider value={contextValue}>{getPageContent()}</AuthBackendContext.Provider>;
};

export default AuthBackend;

export function useAuthBackend(): AuthBackend {
    return useContext(AuthBackendContext);
}