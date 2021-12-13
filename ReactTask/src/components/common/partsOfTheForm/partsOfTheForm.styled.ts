import { ReactNode } from 'react';
import styled from 'styled-components';

interface IStylFilterTypePatient {
  imgBox: string;
}

interface IStylLinkPage {
  link?: ReactNode;
  path: string;
}

const StylArrowFromForm = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  transform: rotate(180deg) translateY(-10%);
  top: 50%;
  margin-right: 20px;

  z-index: 1;
`;

const StylFormSign = styled.form`
  @media (min-width: 768px) {
    min-height: 620px;
  }
`;

const StylInputSearchPatient = styled.input`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    border: none;
    outline: none;
    width: 70%;
    background-color: transparent;
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeight.main};
    color: ${(props) => props.theme.palette.text.primary};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    line-height: 140%;
    margin-left: 18px;

    &::placeholder {
      font-size: ${(props) => props.theme.typography.textSmall.primary};
      font-weight: ${(props) => props.theme.typography.textWeight.main};
      color: ${(props) => props.theme.palette.text.primary};
      font-family: ${(props) => props.theme.typography.textFamily.main};
      text-transform: capitalize;
    }
  }
`;

const StylElementSelect = styled.p`
  width: 100%;
  padding: 10px 20px;
  border-radius: 8px;
  text-align: left;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.main};
  transition: all 0.2s ease;

  @media (min-width: 1024px) {
    &:hover {
      background-color: ${(props) =>
        props.theme.palette.backgroundColor.primary};
    }
  }
`;

const StylFilterTypePatient = styled.span<IStylFilterTypePatient>`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -20px;
    width: 10px;
    height: 10px;
    background-image: url(${(props) => props.imgBox});
    background-repeat: no-repeat;
    background-size: 100%;
    transition: all 0.2s ease;
  }

  color: ${(props) => props.theme.palette.text.second};
  margin-left: 10px;
  margin-right: 8px;

  @media (min-width: 1024px) {
    &:hover {
      &:after {
        transform: translateY(-50%) rotate(180deg);
      }
    }
  }
`;

const StylInformationText = styled.p`
  margin-bottom: 24px;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.primary};
`;

const StylLinkPage = styled.span<IStylLinkPage>`
  & > a {
    text-decoration: underline;
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeight.primary};
    color: ${(props) => props.theme.palette.text.second};
    font-family: ${(props) => props.theme.typography.textFamily.main};
  }
`;

export {
  StylArrowFromForm,
  StylFormSign,
  StylInputSearchPatient,
  StylElementSelect,
  StylFilterTypePatient,
  StylInformationText,
  StylLinkPage,
};
