import styled from 'styled-components';
import StylBoxRow from '../common/Boxes/StylBoxRow';

const StylBoxRowLine = styled(StylBoxRow)`
  position: relative;
  align-items: center;
  width: 100%;
  margin-bottom: 34px;
  padding: 0;

  ::after {
    position: absolute;
    bottom: -14px;
    left: -24px;
    content: '';
    width: calc(100% + 40px);
    border-bottom: 1px solid ${(props) => props.theme.palette.border.main};

    @media (min-width: 1024px) {
      left: -32px;
      width: calc(100% + 64px);
    }
  }

  @media (min-width: 1024px) {
    margin-bottom: 50px;

    ::after {
      bottom: -20px;
    }
  }
`;

export default StylBoxRowLine;
