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
import { ScheduleProvider } from '~/contexts/ScheduleContext';

function App() {
  return (
    <FormProvider>
      <UserProvider>
        <AuthProvider>
          <ScheduleProvider>
            <Router history={history}>
              <Routes />
              <GlobalStyles />
              <ToastContainer autoClose={3000} />
            </Router>
          </ScheduleProvider>
        </AuthProvider>
      </UserProvider>
    </FormProvider>
  );
}

export default App;
