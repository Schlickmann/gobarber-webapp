/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';

import { formContext } from '~/contexts/FormContext';
import { userContext } from '~/contexts/UserContext';
import { authContext } from '~/contexts/AuthContext';
import { Container } from './styles';

export default function AvatarInput() {
  const { cFieldAvatar, setAvatarUrl, setField } = useContext(formContext);
  const { user } = useContext(authContext);
  const { uploadUserAvatar } = useContext(userContext);

  function handleChange(event) {
    uploadUserAvatar(event.target.files[0]);
  }

  useEffect(() => {
    if (user.avatar) {
      setField('cFieldAvatar', user.avatar.id);
      setAvatarUrl(user.avatar.url);
    }
  }, []);

  return (
    <Container>
      <label htmlFor="avatar_id">
        <img
          src={
            cFieldAvatar.url ||
            'https://api.adorable.io/avatars/50/abott@adorable.png'
          }
          alt="Avatar"
        />
        <input
          type={cFieldAvatar.type}
          accept="image/*"
          id={cFieldAvatar.name}
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}
