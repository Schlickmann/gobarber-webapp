import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdFiberManualRecord } from 'react-icons/md';
import logo from '~/assets/logo.svg';

import { formContext } from '~/contexts/FormContext';
import Input from '~/components/Input';

export default function SignIn() {
  const { email, password, setEmail, setPassword } = useContext(formContext);

  return (
    <>
      <img src={logo} alt="GoBarber" color="#0a0944" />
      <form>
        <Input
          type="email"
          name="Email"
          content={email}
          handleInputChange={valor => setEmail(valor)}
        />
        <Input
          type="password"
          name="Password"
          content={password}
          handleInputChange={valor => setPassword(valor)}
        />
        <button type="submit">Sign In</button>
      </form>
      <Link to="/recover">Forgot password?</Link>
      <MdFiberManualRecord
        size={8}
        color="#fe346e"
        style={{ marginLeft: 10, marginRight: 10 }}
      />
      <Link to="/register">Sign Up for GoBarber</Link>
    </>
  );
}
