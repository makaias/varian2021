import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Chakra from './chakra';
import './fonts/index.css';
import Layout from './layout';
import Routing from './routing';
import './style.css';
import AuthBackend from '../context/AuthBackend';
import LoginFeedback from '../components/login/LoginFeedback';
import ApiCallTestComponent from '../ApiCallTestComponent';

function App() {
  return (
    <>
      <ApiCallTestComponent />
      <AuthBackend>
        <Chakra>
          <Router>
            <Layout>
              <LoginFeedback />
              <Routing />
            </Layout>
          </Router>
        </Chakra>
      </AuthBackend>
    </>
  );
}

export default App;
