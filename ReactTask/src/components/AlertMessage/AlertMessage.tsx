import { FunctionComponent } from 'react';
import { StylBoxAlert, StylSubTitleAlert, StylTextAlert } from '..';
import useActionsWithRedux from '../../hooks/useActionsWithRedux';

const AlertMessage: FunctionComponent = () => {
  const { alertMessage } = useActionsWithRedux();

  return (
    <StylBoxAlert err={alertMessage.err} showMessage={alertMessage.show}>
      <StylSubTitleAlert>
        {alertMessage.err
          ? 'Error message goes here'
          : 'Success message goes here'}
      </StylSubTitleAlert>
      <StylTextAlert>{alertMessage.message}</StylTextAlert>
    </StylBoxAlert>
  );
};

export default AlertMessage;
