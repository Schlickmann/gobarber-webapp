import React, { useContext } from 'react';
import { authContext } from '~/contexts/AuthContext';

// import { Container } from './styles';

export default function Dashboard() {
  const { token, user, loading } = useContext(authContext);
  return <>{loading ? <h1>Loading</h1> : <h1>{user.name}</h1>}</>;
}
