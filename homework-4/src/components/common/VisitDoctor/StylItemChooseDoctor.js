import styled from 'styled-components';

const StylChooseDateAndTimeVisitDoctor = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  list-style: none;
  padding-top: 70px;
  list-style: none;
  min-width: 280px;
  max-width: 280px;
  margin-right: 20px;

  &:first-child {
    width: 100%;
  }

  &:last-child {
    margin-right: 0;
  }

  @media (min-width: 728px) {
    max-width: 550px;
  }

  @media (min-width: 1024) {
    max-width: 640px;
  }

  &::before {
    counter-increment: myCounter;
    content: counter(myCounter);
    position: absolute;
    top: 0;
    display: inline-block;
    color: ${(props) => props.theme.palette.text.primary};
    font-weight: ${(props) => props.theme.typography.textWeight.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    line-height: 130%;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.palette.text.primary};
    text-align: center;
    line-height: 32px;
    width: 32px;
    height: 32px;
  }

  ::after {
    position: absolute;
    content: '${(props) => props.contentText}';
    height: 32px;
    width: 100%;
    display: inline-block;
    text-align: left;
    top: 5px;
    left: 48px;
    color: ${(props) => props.theme.palette.text.primary};
    font-weight: ${(props) => props.theme.typography.textWeight.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
  }
`;

export default StylChooseDateAndTimeVisitDoctor;
