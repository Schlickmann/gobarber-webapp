import React, { useState, useEffect } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';

import api from '~/services/api';
import {
  Container,
  Badge,
  NotificationList,
  Notification,
  Scroll,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function getNotifications() {
      const response = await api.get('/notifications');

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true }
        ),
      }));

      setNotifications(data);
    }

    getNotifications();
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge hasUnread onClick={handleToggleVisible}>
        <MdNotifications color="#f0f0f0" size={20} />
      </Badge>
      <NotificationList visible={visible}>
        <Scroll>
          <Notification unread>
            <p>You have a new appointment tomorrow</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>You have a new appointment tomorrow</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>You have a new appointment tomorrow</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification unread>
            <p>You have a new appointment tomorrow</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>You have a new appointment tomorrow</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>You have a new appointment tomorrow</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
