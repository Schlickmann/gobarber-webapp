import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: ${props => (props.used ? '#142850' : '#fe346e')};
  opacity: ${props => (props.used ? 0.6 : 1)};

  strong {
    display: block;
    color: #f0f0f0;
    font-size: 20px;
    font-weight: normal;
    text-align: center;
  }
`;
