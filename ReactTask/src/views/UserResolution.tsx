import { FunctionComponent, useEffect } from 'react';
import {
  StylBoxPatients,
  HeaderProfile,
  UserResolutionList,
} from '../components/';

import avatarImg from './../img/avatars/avatar-patient.png';

interface IUserResolution {
  title: string;
}

const UserResolution: FunctionComponent<IUserResolution> = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <StylBoxPatients>
      <HeaderProfile avatar={avatarImg} />
      <UserResolutionList />
    </StylBoxPatients>
  );
};

export default UserResolution;
