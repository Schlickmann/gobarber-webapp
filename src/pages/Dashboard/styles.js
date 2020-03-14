import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    align-self: center;

    button {
      border: 0;
      background: none;
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
