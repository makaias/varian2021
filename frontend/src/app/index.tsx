import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AuthBackend from '../context/AuthBackend';
import Chakra from './chakra';
import './fonts/index.css';
import Layout from './layout';
import Routing from './routing';
import './style.css';

function App() {
  return (
    <>
      <AuthBackend>
        <Chakra>
          <Router>
            <Layout>
              <Routing />
            </Layout>
          </Router>
        </Chakra>
      </AuthBackend>
    </>
  );
}

export default App;
