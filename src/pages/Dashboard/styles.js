import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
  height: 100%;

  header {
    display: flex;
    align-items: center;
    align-self: center;

    button {
      border: 0;
      background: none;

      &:hover {
        opacity: 0.8;
      }
    }

    strong {
      color: #fe346e;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fe346e;

  strong {
    display: block;
    color: #f0f0f0;
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    color: #142850;
    margin-top: 3px;
  }

  ${props =>
    (props.available || props.past) &&
    css`
      & {
        background: #f0f0f0;

        strong {
          color: ${props.available ? '#fe346e' : '#999'};
        }

        span {
          color: ${props.available ? '#142850' : '#999'};
        }
      }
    `}
`;

export const InitialMessage = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  strong {
    font-size: 22px;
    color: #f0f0f0;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #f0f0f0;
    background-color: #fe346e;
    border-radius: 4px;
    padding: 1rem;
    margin-top: 1rem;
    opacity: 1;
    transition: background-color 250ms;

    &:hover {
      background-color: ${darken(0.03, '#fe346e')};
    }

    svg {
      margin-right: 4px;
    }
  }
`;
