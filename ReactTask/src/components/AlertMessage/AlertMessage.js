import React from 'react';
import { StylBoxAlert, StylSubTitleAlert, StylTextAlert } from './../';

const AlertMessage = ({ showMessage, textMessage, statusErr }) => {
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
