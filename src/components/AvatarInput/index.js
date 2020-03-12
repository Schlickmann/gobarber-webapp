import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '~/services/api';

import { Container } from './styles';

export default function AvatarInput({ content }) {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (content) {
      console.log(content);
      setPreview(content.url);
      console.log(content.url);
    }
  }, []);

  async function handleChange(event) {
    const data = new FormData();

    data.append('file', event.target.files[0]);

    const response = await api.post('/files', data);

    const { url } = response.data;

    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview || 'https://api.adorable.io/avatars/50/abott@adorable.png'
          }
          alt="Avatar"
        />
        <input
          type="file"
          accept="image/*"
          id="avatar"
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}

AvatarInput.propTypes = {
  content: PropTypes.shape({
    url: PropTypes.string,
  }),
};

AvatarInput.defaultProps = {
  content: {
    url: '',
  },
};
