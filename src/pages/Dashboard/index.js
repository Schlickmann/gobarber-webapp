import React, { useContext } from 'react';
import { authContext } from '~/contexts/AuthContext';

// import { Container } from './styles';

export default function Dashboard() {
  const { token } = useContext(authContext);
  return <h1>{token}</h1>;
}
