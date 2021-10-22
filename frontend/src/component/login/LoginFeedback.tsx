import React, {FC, useState} from 'react';
import {useAuthBackend} from "../../context/AuthBackend";
import LoginForm from "./LoginForm";

const LoginFeedback: FC = () => {
    const authBackend = useAuthBackend();
    const [isLoginFormShown, setLoginFormShown] = useState(false);

    if (authBackend.isLoggedIn) {
        return (
            <button onClick={() => authBackend.logout().catch(err => alert('Cannot log you out :/'))}>
                LOGOUT ({authBackend.user?.username})
            </button>
        );
    }

    return (
        <>
            <button onClick={() => setLoginFormShown(true)}>
                LOGIN
            </button>

            {isLoginFormShown && (
                <LoginForm onLogin={authBackend.login}/>
            )}
        </>
    );
};

export default LoginFeedback;
