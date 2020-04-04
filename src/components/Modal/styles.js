import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  > div {
    max-width: 500px;
    width: 100%;
    background-color: #f0f0f0;
    transition: all 1.1s ease-out;
    border-radius: 8px;
    padding: 1rem;
    z-index: 3;

    > header {
      border-bottom: 1px solid #ccc;

      strong {
        color: #142850;
        font-size: 22px;
        font-weight: 500;
      }
    }

    > div {
      margin: 2rem 0;
    }

    > footer {
      border-top: 1px solid #ccc;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;

      > button {
        font-size: 16px;
        border: 0;
        margin-right: 8px;
        margin-top: 8px;
        padding: 10px 20px;
        border-radius: 4px;
        font-weight: 600;
        color: #f0f0f0;

        &:hover {
          opacity: 0.8;
        }
      }

      > button.primary {
        background-color: #fe346e;
      }

      > button.secondary {
        background-color: #333;
      }
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  display: ${props => (props.visible ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
