import React from 'react';
import PropTypes from 'prop-types';

import { Container, Overlay } from './styles';

export default function Modal({ show, title, content: Content, buttons }) {
  if (!show) return null;

  return (
    <>
      <Overlay visible={show}>
        <Container>
          <div>
            {title && (
              <header>
                <strong>{title}</strong>
              </header>
            )}
            <div>
              <Content />
            </div>

            <footer>{buttons.map(btn => btn)}</footer>
          </div>
        </Container>
      </Overlay>
    </>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string,
  content: PropTypes.oneOf([PropTypes.element, PropTypes.func]).isRequired,
  buttons: PropTypes.arrayOf(PropTypes.element).isRequired,
};

Modal.defaultProps = {
  title: null,
};
