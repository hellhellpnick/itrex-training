import styled from 'styled-components';

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

export default StylTitleForm;
