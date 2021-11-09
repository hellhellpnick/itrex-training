import styled from 'styled-components';

const StylSubTitleCard = styled.h2`
  position: relative;
  font-size: ${(props) => props.theme.typography.textSmall.main};
  font-weight: ${(props) => props.theme.typography.textWeight.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.primary};
  line-height: 130%;
  max-width: 160px;
  padding-left: 16px;

  ::after {
    content: '';
    display: block;
    position: absolute;
    top: 3px;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.palette.backgroundColor.second};
  }

  @media (min-width: 768px) {
    max-width: 100%;
  }
`;

export default StylSubTitleCard;
