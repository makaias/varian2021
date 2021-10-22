import React, {FC} from 'react';
import LoginForm, {LoginCommand} from "./LoginForm";

interface Props {
    onLogin: (loginCommand: LoginCommand) => Promise<void>;
}

const LoginWall: FC<Props> = (props) => {

    return (
        <>
            <h2>Log In</h2>
            <LoginForm onLogin={props.onLogin}/>
        </>
    );
};

export default LoginWall;
