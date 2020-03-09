import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import { UserProvider } from '~/contexts/UserContext';
import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <UserProvider>
      <Wrapper>
        <Header />
        {children}
      </Wrapper>
    </UserProvider>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
