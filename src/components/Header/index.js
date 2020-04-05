import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';
import { userContext } from '~/contexts/UserContext';
import logo from '~/assets/logo-white.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const { user } = useContext(userContext);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link className="underline" to="/dashboard">
            DASHBOARD
          </Link>
          <Link className="underline" to="/timesheet">
            SCHEDULE
          </Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{user ? user.name : 'username'}</strong>
              <Link to="/profile">My Profile</Link>
            </div>
            <img
              src={
                user && user.avatar
                  ? user.avatar.url
                  : 'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="Administrator"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
