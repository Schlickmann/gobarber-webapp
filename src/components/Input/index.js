import React from 'react';
import PropTypes from 'prop-types';

import { FieldSection, Label } from './styles';

export default function Input({ type, name, value, handleInputChange }) {
  return (
    <FieldSection>
      <input
        type={type}
        required
        id={name}
        name={name}
        autoComplete="off"
        value={value}
        onChange={handleInputChange}
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
