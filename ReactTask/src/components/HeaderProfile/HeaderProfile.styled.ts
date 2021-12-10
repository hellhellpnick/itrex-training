import styled from 'styled-components';

interface IStylAvatarActive {
  isOnline: boolean;
}

const StylTitleName = styled.h2`
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  color: ${(props) => props.theme.palette.text.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  margin-bottom: 4px;
  line-height: 120%;
  text-transform: capitalize;
`;

const StylSubTitlePosition = styled.h2`
  font-size: ${(props) => props.theme.typography.textSmall.main};
  font-weight: ${(props) => props.theme.typography.textWeight.main};
  color: ${(props) => props.theme.palette.text.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  line-height: 130%;
  text-transform: capitalize;
`;

const StylAvatarActive = styled.div<IStylAvatarActive>`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  :before {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    right: 0;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: ${(props) =>
      props.isOnline && props.theme.palette.backgroundColor.primary};
  }

  :after {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    right: 0;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background-color: ${(props) =>
      props.isOnline && props.theme.palette.backgroundColor.second};
  }
`;

const StylAvatarImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const StylLogo = styled.img``;

export {
  StylSubTitlePosition,
  StylTitleName,
  StylAvatarActive,
  StylAvatarImg,
  StylLogo,
};
