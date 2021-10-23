import React, {createContext, FunctionComponent, ReactNode, useContext, useEffect, useState} from 'react';
import {LoginCommand} from '../components/login/LoginForm';
import {UserType} from '../enum/UserType';
import BearerTokenService from '../service/BearerTokenService';
import callJsonEndpoint, {BearerTokenSendingCommand} from '../util/api/callJsonEndpoint';

export interface User {
  id: number;
  username: string;
  userType: UserType;
  firstname: string;
  surename: string;
  //all other strapi user stuff here
}

export interface AuthBackend {
  user: User;
  isLoggedIn: boolean;
  logout: () => Promise<void>;
  login: (loginCommand: LoginCommand) => Promise<void>;
  isDoctor: boolean;
}

export const AuthBackendContext = createContext<AuthBackend>({
  user: null,
  isLoggedIn: null,
  logout: null,
  login: null,
  isDoctor: null,
});

interface Props {
  children: ReactNode;
}

enum LoginInfoState {
  LOGGED_IN = 1,
  LOGGED_OUT,
  UNKNOWN,
}

const AuthBackend: FunctionComponent = ({children}: Props): JSX.Element => {
  const [user, setUser] = useState<User>(null);
  const [loginInfoState, setLoginInfoState] = useState<LoginInfoState>(LoginInfoState.UNKNOWN);

  function tryToReuseSavedBearerToken() {
    if (!BearerTokenService.isTokenSet()) {
      setLoginInfoState(LoginInfoState.LOGGED_OUT);
      return;
    }

    callJsonEndpoint<User>({
      conf: {
        url: '/users/me',
      },
      bearerTokenSendingCommand: BearerTokenSendingCommand.SEND,
    })
      .then((resp) => {
        setUser(resp.data);
        setLoginInfoState(LoginInfoState.LOGGED_IN);
      })
      .catch(() => {
        BearerTokenService.deleteToken();
        setLoginInfoState(LoginInfoState.LOGGED_OUT);
      });
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
      setLoginInfoState(LoginInfoState.LOGGED_OUT);
      resolve();
    });
  }

  async function attemptLogin(loginCommand: LoginCommand): Promise<void> {
    return callJsonEndpoint({
      conf: {
        url: '/auth/local',
        method: 'post',
        data: {
          identifier: loginCommand.identifier,
          password: loginCommand.password,
        },
      },
      bearerTokenSendingCommand: BearerTokenSendingCommand.DO_NOT_SEND,
    })
      .then((resp) => {
        BearerTokenService.setToken(resp.data['jwt']);
        setUser(resp.data['user']);
        setLoginInfoState(LoginInfoState.LOGGED_IN);
      })
      .catch((err) => {
        setLoginInfoState(LoginInfoState.LOGGED_OUT);
        throw err;
      });
  }

  const contextValue: AuthBackend = {
    user: user,
    isLoggedIn: isLoggedIn(),
    logout: logout,
    login: attemptLogin,
    isDoctor: user?.userType === UserType.DOCTOR,
  };

  return (
    <AuthBackendContext.Provider value={contextValue}>
      {loginInfoState === LoginInfoState.UNKNOWN ? <p>Pending login...</p> : children}
    </AuthBackendContext.Provider>
  );
};

export default AuthBackend;

export function useAuthBackend(): AuthBackend {
  return useContext(AuthBackendContext);
}
