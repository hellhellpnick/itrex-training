import React, { useState } from 'react';
import {
  StylBoxCenterResolutionForm,
  StylTitleResolutionForm,
  StylNamePersonResolutionForm,
  StylTitleTextArea,
  StylTextAreaResolution,
  StylRowFormBtns,
  StylBtnCloseForm,
  StylBtnActionForm,
} from '..';

const ResolutionPatient = ({
  showContent,
  namePesron,
  textAreaMessage,
  statusForm,
  changeShowResolution,
}) => {
  const [isTextArea, setTextArea] = useState(textAreaMessage);

  const changeArea = (e) => {
    setTextArea(e.currentTarget.value);
  };

  return (
    <StylBoxCenterResolutionForm showResolution={showContent}>
      <StylTitleResolutionForm>
        {statusForm ? 'Create a Resolution' : 'Edit a Resolution'}
      </StylTitleResolutionForm>
      <StylNamePersonResolutionForm>{namePesron}</StylNamePersonResolutionForm>
      <StylTitleTextArea>Resolution</StylTitleTextArea>
      <StylTextAreaResolution value={isTextArea} onChange={changeArea} />
      <StylRowFormBtns>
        <StylBtnCloseForm type='button' onClick={changeShowResolution}>
          Cancel
        </StylBtnCloseForm>
        <StylBtnActionForm type='submit' statusForm={statusForm}>
          {statusForm ? 'Create' : 'Save'}
        </StylBtnActionForm>
      </StylRowFormBtns>
    </StylBoxCenterResolutionForm>
  );
};

export default ResolutionPatient;
