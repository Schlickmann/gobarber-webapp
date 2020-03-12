/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { MdClose } from 'react-icons/md';
import { FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import Input from '~/components/Input';
import AvatarInput from '~/components/AvatarInput';
import { authContext } from '~/contexts/AuthContext';
import { formContext } from '~/contexts/FormContext';
import { userContext } from '~/contexts/UserContext';
import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Inform a valid email address')
    .required('Email is required'),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    oldPassword.trim()
      ? field
          .required('New password is required')
          .min(6, 'Password needs to be at least 6 characters long')
      : field
  ),
  passwordConfirmation: Yup.string().when('password', (password, field) =>
    password.trim()
      ? field
          .required('Password Confirmation is required')
          .oneOf([Yup.ref('password')], 'Password confirmation does not match')
      : field
  ),
});

export default function Profile() {
  const {
    cFieldName,
    cFieldEmail,
    cFieldPassword,
    cFieldOldPassword,
    cFieldConfirmPassword,
    cFieldAvatar,
    setField,
    setShowPassword,
  } = useContext(formContext);

  const { user, logOutRequest } = useContext(authContext);
  const { updateUserRequest, loading } = useContext(userContext);

  useEffect(() => {
    function loadUserProfile() {
      setField('cFieldEmail', user.email);
      setField('cFieldName', user.name);
    }

    loadUserProfile();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const data = {
        [cFieldEmail.name]: cFieldEmail.value,
        [cFieldName.name]: cFieldName.value,
        [cFieldOldPassword.name]: cFieldOldPassword.value,
        [cFieldPassword.name]: cFieldPassword.value,
        [cFieldConfirmPassword.name]: cFieldConfirmPassword.value,
        [cFieldAvatar.name]: cFieldAvatar.value,
      };

      await schema.validate(data);

      updateUserRequest(data);
    } catch (error) {
      toast.error(error.message);
    }

    setField('cFieldOldPassword', '');
    setField('cFieldPassword', '');
    setField('cFieldConfirmPassword', '');
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <AvatarInput />
        <Input
          type={cFieldName.type}
          name={cFieldName.name}
          label={cFieldName.label}
          content={cFieldName.value}
          handleInputChange={text => setField('cFieldName', text)}
        >
          <button type="button" onClick={() => setField('cFieldName', '')}>
            <MdClose size={12} color="#fe346e" />
          </button>
        </Input>
        <Input
          type={cFieldEmail.type}
          name={cFieldEmail.name}
          label={cFieldEmail.label}
          content={cFieldEmail.value}
          handleInputChange={text => setField('cFieldEmail', text)}
        >
          <button type="button" onClick={() => setField('cFieldEmail', '')}>
            <MdClose size={12} color="#fe346e" />
          </button>
        </Input>
        <br />
        <br />
        <Input
          type={cFieldOldPassword.type}
          name={cFieldOldPassword.name}
          label={cFieldOldPassword.label}
          content={cFieldOldPassword.value}
          handleInputChange={text => setField('cFieldOldPassword', text)}
        >
          {cFieldOldPassword.type === 'password' ? (
            <button
              type="button"
              onClick={() => setShowPassword('cFieldOldPassword', true)}
            >
              <FaEye size={12} color="#fe346e" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowPassword('cFieldOldPassword', false)}
            >
              <FaEyeSlash size={12} color="#fe346e" />
            </button>
          )}
        </Input>
        <Input
          type={cFieldPassword.type}
          name={cFieldPassword.name}
          label={cFieldPassword.label}
          content={cFieldPassword.value}
          handleInputChange={text => setField('cFieldPassword', text)}
        >
          {cFieldPassword.type === 'password' ? (
            <button
              type="button"
              onClick={() => setShowPassword('cFieldPassword', true)}
            >
              <FaEye size={12} color="#fe346e" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowPassword('cFieldPassword', false)}
            >
              <FaEyeSlash size={12} color="#fe346e" />
            </button>
          )}
        </Input>
        <Input
          type={cFieldConfirmPassword.type}
          name={cFieldConfirmPassword.name}
          label={cFieldConfirmPassword.label}
          content={cFieldConfirmPassword.value}
          handleInputChange={text => setField('cFieldConfirmPassword', text)}
        >
          {cFieldConfirmPassword.type === 'password' ? (
            <button
              type="button"
              onClick={() => setShowPassword('cFieldConfirmPassword', true)}
            >
              <FaEye size={12} color="#fe346e" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowPassword('cFieldConfirmPassword', false)}
            >
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
            'UPDATE PROFILE'
          )}
        </button>
      </form>
      <button type="button" onClick={logOutRequest}>
        LOG OUT
      </button>
    </Container>
  );
}
