import React from 'react';
import PropTypes from 'prop-types';

import { FieldSection, Label } from './styles';

export default function Input({ type, name, content, handleInputChange }) {
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
    </FieldSection>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleInputChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  value: '',
  name: '',
};
