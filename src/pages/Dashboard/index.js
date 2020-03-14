import React, { useContext } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { authContext } from '~/contexts/AuthContext';

import { Container, Time } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#fe346e" />
        </button>
        <strong>March 13th</strong>
        <button type="button">
          <MdChevronRight size={36} color="#fe346e" />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Juliani Schlickmann Damasceno</span>
        </Time>
        <Time available>
          <strong>08:00</strong>
          <span>Time available</span>
        </Time>
        <Time>
          <strong>09:00</strong>
          <span>Emerson Mellado</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Maria Fernandes</span>
        </Time>
      </ul>
    </Container>
  );
}
