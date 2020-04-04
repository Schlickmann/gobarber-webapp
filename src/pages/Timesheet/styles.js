import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: center;

    button {
      border: 0;
      background: none;

      &:hover {
        opacity: 0.8;
      }
    }

    strong {
      color: #f0f0f0;
      font-size: 24px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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
    text-align: center;
  }
`;
