import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';
import { authContext } from '~/contexts/AuthContext';
import logo from '~/assets/logo-white.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const { user } = useContext(authContext);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{user ? user.name : 'username'}</strong>
              <Link to="/profile">My Profile</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Administrator"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
