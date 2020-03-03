import React from 'react';
import PropTypes from 'prop-types';

import { FieldSection, Label } from './styles';

export default function Input({
  type,
  name,
  content,
  handleInputChange,
  children,
}) {
  return (
    <FieldSection>
      <input
        type={type}
        required
        id={name}
        name={name}
        autoComplete="off"
        value={content}
        onChange={event => handleInputChange(event.target.value)}
      />
      <Label htmlFor={name}>
        <span>{name}</span>
      </Label>
      {children}
    </FieldSection>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleInputChange: PropTypes.func.isRequired,
  children: PropTypes.element,
};

Input.defaultProps = {
  content: '',
  name: '',
  children: null,
};
