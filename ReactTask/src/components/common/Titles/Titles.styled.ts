import styled from 'styled-components';
import arrowRight from './../../../img/icons/icon-arrow-right.svg';

const StylTitleForm = styled.fieldset`
  position: relative;
  align-self: stretch;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.palette.text.main};
  line-height: 24px;
  margin-bottom: 24px;
  font-family: ${(props) => props.theme.typography.textFamily.main};
  border: none;

  @media (min-width: 768px) {
    margin-bottom: 40px;
    font-size: ${(props) => props.theme.typography.textLarge.main};
  }
`;

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

const StylTitlePatients = styled.h2`
  font-size: ${(props) => props.theme.typography.textMedium.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.main};
  line-height: 24px;
`;

const StylTitleCurrentPatientAppointment = styled(StylTitlePatientAppointment)`
  color: ${(props) => props.theme.palette.text.primary};
  margin-right: 0;

  &::after {
    display: none;
  }
`;

export {
  StylTitleForm,
  StylTitlePatientAppointment,
  StylTitlePatients,
  StylTitleCurrentPatientAppointment,
};
