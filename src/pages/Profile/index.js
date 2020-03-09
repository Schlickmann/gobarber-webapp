import React, { useContext } from 'react';
import { MdClose } from 'react-icons/md';
import { FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';

import Input from '~/components/Input';
import { authContext } from '~/contexts/AuthContext';
import { Container } from './styles';

export default function Profile() {
  const { loading, user } = useContext(authContext);

  return (
    <Container>
      <form>
        <Input
          // type={cFieldName.type}
          name="Name"
          // content={cFieldName.value}
          // handleInputChange={text => setName(text)}
        >
          <button type="button" onClick={() => {}}>
            <MdClose size={12} color="#fe346e" />
          </button>
        </Input>
        <Input
          // type={cFieldEmail.type}
          name="Email"
          // content={cFieldEmail.value}
          // handleInputChange={text => setEmail(text)}
        >
          <button type="button" onClick={() => {}}>
            <MdClose size={12} color="#fe346e" />
          </button>
        </Input>
        <Input
          // type={cFieldPassword.type}
          name="Old Password"
          // content={cFieldPassword.value}
          // handleInputChange={text => setPassword(text)}
        >
          {/* {cFieldPassword.type === 'password' ? (
            <button type="button" onClick={() => setShowPassword(true)}>
              <FaEye size={12} color="#fe346e" />
            </button>
          ) : (
            <button type="button" onClick={() => setShowPassword(false)}>
              <FaEyeSlash size={12} color="#fe346e" />
            </button>
          )} */}
        </Input>
        <Input
          // type={cFieldPassword.type}
          name="Password"
          // content={cFieldPassword.value}
          // handleInputChange={text => setPassword(text)}
        >
          {/* {cFieldPassword.type === 'password' ? (
            <button type="button" onClick={() => setShowPassword(true)}>
              <FaEye size={12} color="#fe346e" />
            </button>
          ) : (
            <button type="button" onClick={() => setShowPassword(false)}>
              <FaEyeSlash size={12} color="#fe346e" />
            </button>
          )} */}
        </Input>
        <Input
          // type={cFieldPassword.type}
          name="Confirm Password"
          // content={cFieldPassword.value}
          // handleInputChange={text => setPassword(text)}
        >
          {/* {cFieldPassword.type === 'password' ? (
            <button type="button" onClick={() => setShowPassword(true)}>
              <FaEye size={12} color="#fe346e" />
            </button>
          ) : (
            <button type="button" onClick={() => setShowPassword(false)}>
              <FaEyeSlash size={12} color="#fe346e" />
            </button>
          )} */}
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
      <button type="button">Log out</button>
    </Container>
  );
}
