import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { alert } from './alertAction';
import { IAlertMessage } from '../../modules/AlertMessage';

const errors = createReducer({} as IAlertMessage, {
  [alert.type]: (
    _: IAlertMessage,
    { payload }: PayloadAction<IAlertMessage>
  ) => ({
    ...payload,
  }),
});

export default errors;
