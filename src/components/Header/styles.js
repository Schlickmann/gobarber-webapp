import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    height: 100%;

    > img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #f0f0f0;
    }

    a {
      font-weight: bold;
      color: #f0f0f0;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #f0f0f0;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fe346e;
    }

    a {
      display: block;
      color: #f0f0f0;
      margin-top: 2px;
      font-size: 12px;
    }
  }
  img {
    height: 32px;
    border-radius: 50%;
  }
`;
