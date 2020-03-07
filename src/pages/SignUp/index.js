import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { MdClose } from 'react-icons/md';
import { FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
import logo from '~/assets/logo.svg';

import { formContext } from '~/contexts/FormContext';
import { userContext } from '~/contexts/UserContext';
import Input from '~/components/Input';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Inform a valid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password needs to be at least 6 characters long'),
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

  const { storeUserRequest, loading } = useContext(userContext);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await schema.validate({
        name: cFieldName.value,
        email: cFieldEmail.value,
        password: cFieldPassword.value,
      });

      storeUserRequest(
        cFieldName.value,
        cFieldEmail.value,
        cFieldPassword.value
      );
    } catch (error) {
      toast.error(error.message);
    }
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
        <button
          className={loading ? 'loading' : ''}
          disabled={loading}
          type="submit"
        >
          {loading ? (
            <FaSpinner className="spinner" size={18} color="#fff" />
          ) : (
            'Sign Up'
          )}
        </button>
      </form>
      <Link to="/">Already have an account</Link>
    </>
  );
}
