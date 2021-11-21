import {
  StylBoxRow,
  StylBoxDoctor,
  StylBoxFlexColumn,
  StylTitleName,
  StylSubTitlePosition,
  AvatarActive,
  StylLogo,
} from './../';

import logoSitePng from './../../img/logo.png';

const HeaderProfile = ({
  firstName,
  lastName,
  position,
  wayToImg,
  isOnline,
}) => {
  return (
    <StylBoxRow>
      <StylLogo src={logoSitePng} alt='logo' />
      <StylBoxDoctor>
        <StylBoxFlexColumn>
          <StylTitleName>
            {firstName} {lastName}
          </StylTitleName>
          <StylSubTitlePosition>{position}</StylSubTitlePosition>
        </StylBoxFlexColumn>
        <AvatarActive src={wayToImg} isOnline={isOnline} alt='avatar-user' />
      </StylBoxDoctor>
    </StylBoxRow>
  );
};

export default HeaderProfile;
