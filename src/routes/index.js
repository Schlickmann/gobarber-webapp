import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

// External routes
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

// Error route
import NotFound from '../pages/NotFound';

// Internal routes
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/" component={NotFound} />
    </Switch>
  );
}
