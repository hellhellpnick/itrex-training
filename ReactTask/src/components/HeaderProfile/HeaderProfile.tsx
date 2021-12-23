import  { FunctionComponent } from 'react';
import {
  StylBoxRow,
  StylBoxDoctor,
  StylBoxFlexColumn,
  StylTitleName,
  StylSubTitlePosition,
  AvatarActive,
  StylLogo,
} from '..';

import logoSitePng from './../../assets/logo.png';
import useActionsWithRedux from '../../hooks/useActionsWithRedux';
import { IHeaderProfile } from '../../modules/HeaderProfile.model';

const HeaderProfile: FunctionComponent<IHeaderProfile> = ({ avatar }) => {
  const { profile } = useActionsWithRedux();

  const dataUser = profile.first_name
    ? profile
    : {
        first_name: 'Larry',
        last_name: 'Robbinson',
        photo: avatar,
        role_name: 'Patient',
      };

  return (
    <StylBoxRow>
      <StylLogo src={logoSitePng} alt='logo' />
      <StylBoxDoctor>
        <StylBoxFlexColumn>
          <StylTitleName>
            {dataUser.first_name} {dataUser.last_name}
          </StylTitleName>
          <StylSubTitlePosition>{dataUser.role_name}</StylSubTitlePosition>
        </StylBoxFlexColumn>
        <AvatarActive src={dataUser.photo} isOnline={true} alt='avatar-user' />
      </StylBoxDoctor>
    </StylBoxRow>
  );
};

export default HeaderProfile;
