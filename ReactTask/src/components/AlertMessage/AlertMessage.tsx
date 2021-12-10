import React, { FunctionComponent } from 'react';
import { StylBoxAlert, StylSubTitleAlert, StylTextAlert } from '..';
import { IAlertMessage } from '../../modules/AlertMessage.models';

const AlertMessage: FunctionComponent<IAlertMessage> = ({
  showMessage,
  textMessage,
  statusErr,
}) => {
  return (
    <StylBoxAlert err={statusErr} showMessage={showMessage}>
      <StylSubTitleAlert>
        {statusErr ? 'Error message goes here' : 'Success message goes here'}
      </StylSubTitleAlert>
      <StylTextAlert>{textMessage}</StylTextAlert>
    </StylBoxAlert>
  );
};

export default AlertMessage;
