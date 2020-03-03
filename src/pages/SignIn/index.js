import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdFiberManualRecord, MdClose } from 'react-icons/md';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from '~/assets/logo.svg';

import { formContext } from '~/contexts/FormContext';
import Input from '~/components/Input';

export default function SignIn() {
  const {
    email,
    password,
    setEmail,
    setPassword,
    setShowPassword,
  } = useContext(formContext);

  return (
    <>
      <img src={logo} alt="GoBarber" color="#0a0944" />
      <form>
        <Input
          type={email.type}
          name="Email"
          content={email.value}
          handleInputChange={valor => setEmail(valor)}
          icon={<MdClose size={12} color="#fff" />}
        >
          <button type="button" onClick={() => setEmail('')}>
            <MdClose size={12} color="#fe346e" />
          </button>
        </Input>
        <Input
          type={password.type}
          name="Password"
          content={password.value}
          handleInputChange={valor => setPassword(valor)}
        >
          {password.type === 'password' ? (
            <button type="button" onClick={() => setShowPassword(true)}>
              <FaEye size={12} color="#fe346e" />
            </button>
          ) : (
            <button type="button" onClick={() => setShowPassword(false)}>
              <FaEyeSlash size={12} color="#fe346e" />
            </button>
          )}
        </Input>
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
