import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Chakra from "./chakra";
import "./fonts/index.css";
import Layout from "./layout";
import Routing from "./routing";
import "./style.css";
import ApiCallTestComponent from "../ApiCallTestComponent";

function App() {
    return (
        <>
            <ApiCallTestComponent/>
            <Chakra>
                <Layout>
                </Layout>
            </Chakra>
        </>
    );
}

export default App;
