import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Chakra from "./chakra";
import "./fonts/index.css";
import Layout from "./layout";
import Routing from "./routing";
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
