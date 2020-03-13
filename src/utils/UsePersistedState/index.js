import { useState, useEffect } from 'react';

export default function usePersistedState(key, defaultValue) {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) || defaultValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  function getState() {
    return JSON.parse(localStorage.getItem(key));
  }

  return [state, setState, getState];
}
