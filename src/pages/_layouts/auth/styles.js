import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #6580cd, #2ca6e2);
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
      background: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
    }

    a {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: #f0f0f0;

        transform: scaleX(0);
        transform-origin: right;
        transition: transform 250ms ease-in;
      }

      &:hover:after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      border: 0;
      background-color: #0a0944;
      color: #f0f0f0;
      border-radius: 4px;
      font-size: 16px;
    }
  }
`;
