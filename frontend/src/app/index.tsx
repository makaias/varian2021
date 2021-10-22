import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Chakra from "./chakra";
import "./fonts/index.css";
import Layout from "./layout";
import Routing from "./routing";
import "./style.css";

function App() {
  return (
    <Chakra>
      <Router>
        <Layout>
          <Routing />
        </Layout>
      </Router>
    </Chakra>
  );
}

export default App;
