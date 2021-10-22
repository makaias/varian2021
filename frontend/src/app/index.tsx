import React from "react";
import Chakra from "./chakra";
import Layout from "./layout";
import "./style.css";
import ApiCallTestComponent from "../ApiCallTestComponent";
import AuthBackend from "../context/AuthBackend";
import LogoutButton from "../component/login/LogoutButton";

function App() {

    return (
        <>
            <AuthBackend>
                <LogoutButton/>
                <ApiCallTestComponent/>
                <Chakra>
                    <Layout>
                    </Layout>
                </Chakra>
            </AuthBackend>
        </>
    );
}

export default App;
