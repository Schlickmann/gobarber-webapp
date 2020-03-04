import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { MdClose } from 'react-icons/md';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from '~/assets/logo.svg';

import { formContext } from '~/contexts/FormContext';
import Input from '~/components/Input';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Inform a valid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6)
    .required('Password is required'),
});

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

  async function handleSubmit(event) {
    event.preventDefault();

    await schema
      .strict()
      .validate({
        name: cFieldName.value,
        email: cFieldEmail.value,
        password: cFieldPassword.value,
      })
      .catch(errors => {
        toast.error(errors.message);
      });
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form onSubmit={handleSubmit}>
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
