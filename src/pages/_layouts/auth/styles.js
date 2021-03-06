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
    }

    button.loading {
      cursor: not-allowed;

      > svg.spinner {
        animation: ${rotate} 2s infinite;
      }
    }
  }
`;
