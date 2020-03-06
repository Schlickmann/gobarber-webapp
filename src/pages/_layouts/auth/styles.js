import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

const rotate = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`;

export const Wrapper = styled.div`
  height: 100%;
  background: #142850;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }

    button {
      margin: 5px 0 5px 0;
      height: 44px;
      border: 0;
      background-color: #fe346e;
      color: #f0f0f0;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      transition: background-color 200ms;

      &:hover {
        background-color: ${darken(0.05, '#fe346e')};
      }

      > svg.spinner {
        animation: ${rotate} 2s infinite;
      }
    }
  }

  a {
    display: inline-block;
    position: relative;
    color: #f0f0f0;
    line-height: 1.8;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: #fe346e;

      transform: scaleX(0);
      transform-origin: right;
      transition: transform 250ms ease-in;
    }

    &:hover:after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;
