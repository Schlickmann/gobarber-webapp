import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import PerfectScrollBar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #fe346e;
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  background: #f0f0f0;
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #f0f0f0;
  }
`;

export const Notification = styled.div`
  color: #142850;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px dotted ${lighten(0.3, '#666')};
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    display: block;
    font-size: 12px;
    color: #666;
  }

  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: #fe346e;

    &:hover {
      color: ${darken(0.2, '#fe346e')};
    }
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 7px;
        height: 7px;
        background: #fe346e;
        border-radius: 50%;
        margin-left: 10px;
      }
    `}
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 260px;
  padding: 5px 15px;
`;
