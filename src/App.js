import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './config/Reactotron';

import Routes from './routes';
import history from './services/history';
import GlobalStyles from './styles/global';
import { AuthProvider } from './contexts/AuthContext';
import { FormProvider } from '~/contexts/FormContext';
import { UserProvider } from '~/contexts/UserContext';

function App() {
  return (
    <FormProvider>
      <UserProvider>
        <AuthProvider>
          <Router history={history}>
            <Routes />
            <GlobalStyles />
            <ToastContainer autoClose={3000} />
          </Router>
        </AuthProvider>
      </UserProvider>
    </FormProvider>
  );
}

export default App;
