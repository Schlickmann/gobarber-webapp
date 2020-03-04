import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from '~/assets/logo.svg';

import { formContext } from '~/contexts/FormContext';
import Input from '~/components/Input';

export default function SignUp() {
  const {
    cFieldName,
    cFieldEmail,
    cFieldPassword,
    setName,
    setEmail,
    setPassword,
    setShowPassword,
  } = useContext(formContext);

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form>
        <Input
          type={cFieldName.type}
          name="Name"
          content={cFieldName.value}
          handleInputChange={text => setName(text)}
          icon={<MdClose size={12} color="#fff" />}
        >
          <button type="button" onClick={() => setName('')}>
            <MdClose size={12} color="#fe346e" />
          </button>
        </Input>
        <Input
          type={cFieldEmail.type}
          name="Email"
          content={cFieldEmail.value}
          handleInputChange={text => setEmail(text)}
          icon={<MdClose size={12} color="#fff" />}
        >
          <button type="button" onClick={() => setEmail('')}>
            <MdClose size={12} color="#fe346e" />
          </button>
        </Input>
        <Input
          type={cFieldPassword.type}
          name="Password"
          content={cFieldPassword.value}
          handleInputChange={text => setPassword(text)}
        >
          {cFieldPassword.type === 'password' ? (
            <button type="button" onClick={() => setShowPassword(true)}>
              <FaEye size={12} color="#fe346e" />
            </button>
          ) : (
            <button type="button" onClick={() => setShowPassword(false)}>
              <FaEyeSlash size={12} color="#fe346e" />
            </button>
          )}
        </Input>
        <button type="submit">Sign Up</button>
      </form>
      <Link to="/">Already have an account</Link>
    </>
  );
}
