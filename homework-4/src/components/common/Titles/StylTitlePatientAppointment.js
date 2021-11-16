import styled from 'styled-components';
import arrowRight from './../../../img/icons/icon-arrow-right.svg';

const StylTitlePatientAppointment = styled.h4`
  position: relative;
  align-self: stretch;
  font-size: ${(props) => props.theme.typography.textSmall.main};
  color: ${(props) => props.theme.palette.text.second};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  margin-right: 40px;

  &::after {
    content: '';
    position: absolute;
    display: block;
    background-image: url(${arrowRight});
    top: 50%;
    right: -25px;
    transform: translateY(-50%);
    width: 8px;
    height: 13px;
  }
`;

export default StylTitlePatientAppointment;
