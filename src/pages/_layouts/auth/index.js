import React from 'react';
import PropTypes from 'prop-types';

import { FormProvider } from '~/contexts/FormContext';
import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
  return (
    <FormProvider>
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
    </FormProvider>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
