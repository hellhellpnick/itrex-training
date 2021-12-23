import { FunctionComponent } from 'react';
import {
  StylBoxAlert,
  StylSubTitleAlert,
  StylTextAlert,
  StylBtnClose,
} from '..';
import useActionsWithRedux from '../../hooks/useActionsWithRedux';

const AlertMessage: FunctionComponent = () => {
  const { alertMessage, alertHidden } = useActionsWithRedux();

  return (
    <StylBoxAlert
      err={alertMessage.err}
      showMessage={alertMessage.show}
      className={
        alertMessage.show
          ? 'animate__animated  animate__backInLeft'
          : 'animate__animated  animate__backOutLeft'
      }
    >
      <StylBtnClose type='button' onClick={alertHidden} />
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
