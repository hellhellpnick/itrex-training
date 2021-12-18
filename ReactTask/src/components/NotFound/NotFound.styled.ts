import styled from 'styled-components';

const StylBoxCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: 50%;
  transform: translate(-50%, -50%);
`;

const StylImgNotFound = styled.img`
  margin-bottom: 90px;
  max-width: 300px;

  @media (min-width: 768px) {
    max-width: 500px;
  }

  @media (min-width: 1024px) {
    max-width: 800px;
  }
`;

const StylTitleNotFound = styled.h3`
  font-size: ${(props) => props.theme.typography.textMedium.primary};
  font-weight: ${(props) => props.theme.typography.textWeight.primary};
  color: ${(props) => props.theme.palette.text.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  text-align: center;
`;

export { StylBoxCenter, StylImgNotFound, StylTitleNotFound };
