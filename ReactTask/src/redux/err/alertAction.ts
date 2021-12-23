import { createAction } from '@reduxjs/toolkit';

const alert = createAction('user/Alert', (payload) => ({
  payload,
}));

export { alert };
