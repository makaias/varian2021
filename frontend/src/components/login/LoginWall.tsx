import React, {FC} from 'react';
import LoginForm, {LoginCommand} from "./LoginForm";
import {useAuthBackend} from "../../context/AuthBackend";

const LoginWall: FC = () => {
    const authBackend = useAuthBackend();
    return (
        <>
            <h2>Log In</h2>
            <LoginForm onLogin={authBackend.login}/>
        </>
    );
};

export default LoginWall;
