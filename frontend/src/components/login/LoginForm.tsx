import React, {FC, useState} from 'react';

export interface LoginCommand {
    identifier: string;
    password: string;
}

interface Props {
    onLogin: (loginCommand: LoginCommand) => Promise<void>;
}

const LoginForm: FC<Props> = (props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <p>Username:</p>
            <input value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <p>Password:</p>
            <input value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   type="password"
            />
            <button onClick={() => props.onLogin({
                identifier: userName,
                password: password,
            }).catch((err) => alert('Cannot log you in :/'))}>Log me in
            </button>
        </>
    );
};

export default LoginForm;
