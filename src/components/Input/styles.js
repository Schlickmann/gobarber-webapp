import styled from 'styled-components';

export const FieldSection = styled.div`
  flex: 1;
  width: 100%;
  height: 44px;
  position: relative;
  overflow: hidden;
  margin-bottom: 5px;
  input {
    width: 100%;
    height: 100%;
    color: #f0f0f0;
    padding-top: 20px;
    padding-left: 5px;
    border: none;
  }
  input:focus + label > span,
  input:valid + label > span {
    transform: translateY(-135%);
    font-size: 12px;
    color: #f0f0f0;
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
  border-bottom: 1px solid #0a0944;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1;
    height: 100%;
    width: 100%;
    border-bottom: 3px solid #f0f0f0;
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
    color: #0a0944;
  }
`;
