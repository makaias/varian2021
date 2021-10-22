import React from "react";
import Chakra from "./chakra";
import Layout from "./layout";
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
