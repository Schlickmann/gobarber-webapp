import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';

import api from '~/services/api';
import {
  Container,
  Badge,
  NotificationList,
  Notification,
  Scroll,
  Overlay,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const hasUnread = useMemo(
    () => !!notifications.find(notification => notification.read === false),
    [notifications]
  );

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

  async function handleNotificationRead(id) {
    await api.put(`/notifications/${id}`);

    setNotifications(
      notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  }

  return (
    <Container>
      <Badge hasUnread={hasUnread} onClick={handleToggleVisible}>
        <MdNotifications color="#f0f0f0" size={20} />
      </Badge>
      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(notification => (
            <Notification key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.timeDistance}</time>
              {!notification.read && (
                <button
                  type="button"
                  onClick={() => handleNotificationRead(notification._id)}
                >
                  Mark as read
                </button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
      <Overlay visible={visible} />
    </Container>
  );
}
