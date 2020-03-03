import styled from 'styled-components';

export const FieldSection = styled.div`
  flex: 1;
  width: 100%;
  height: 44px;
  position: relative;
  overflow: hidden;
  margin-bottom: 5px;

  button > svg {
    position: absolute;
    right: 15px;
    bottom: 15px;
    width: 16px;
    height: 16px;
    border: none;
    outline: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  input {
    width: 100%;
    height: 100%;
    color: #fe346e;
    padding-top: 20px;
    padding-left: 5px;
    border: none;
  }

  input:focus + label > span,
  input:valid + label > span {
    transform: translateY(-135%);
    font-size: 12px;
    color: #fe346e;
  }

  input:valid ~ button > svg {
    opacity: 1;
  }

  input:focus + label::after,
  input:valid + label::after {
    transform: translateX(0);
  }
`;

export const Label = styled.label`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;
  border-bottom: 1px solid #f0f0f0;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1;
    height: 100%;
    width: 100%;
    border-bottom: 3px solid #fe346e;
    transform: translateX(-100%);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  span {
    position: absolute;
    bottom: 5px;
    left: 0;
    transition: all 0.3s ease;
    padding: 0 5px;
    color: #f0f0f0;
  }
`;
