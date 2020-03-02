import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

import Input from '~/components/Input';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <Input type="email" name="Email" />
        <Input type="password" name="Password" />

        <button type="submit">Sign In</button>
        <Link to="/recover">Forgot password?</Link>
        <Link to="/register">Sign Up for GoBarber</Link>
      </form>
    </>
  );
}
