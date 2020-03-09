import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './config/Reactotron';

import Routes from './routes';
import history from './services/history';
import GlobalStyles from './styles/global';
import { AuthProvider } from './contexts/AuthContext';
import { FormProvider } from '~/contexts/FormContext';

function App() {
  return (
    <FormProvider>
      <AuthProvider>
        <Router history={history}>
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={3000} />
        </Router>
      </AuthProvider>
    </FormProvider>
  );
}

export default App;
