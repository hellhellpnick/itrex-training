import styled from 'styled-components';

const StylInformationText = styled.p`
margin-bottom: 24px;
font-size: ${(props) => props.theme.typography.textSmall.primary};
font-weight: ${(props) => props.theme.typography.textWeight.main};
font-family: ${(props) => props.theme.typography.textFamily.main};
color: ${(props) => props.theme.palette.text.primary};
`;

export default StylInformationText;
