import React, {FC} from 'react';
import {useAuthBackend} from "../../context/AuthBackend";

const LogoutButton: FC = () => {
    const authBackend = useAuthBackend();
    return (
        <button onClick={() => authBackend.logout().catch(err => alert('Cannot log you out :/'))}>
            LOGOUT
        </button>
    );
};

export default LogoutButton;
