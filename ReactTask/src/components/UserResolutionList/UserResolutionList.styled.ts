import styled from 'styled-components';

const StylTable = styled.table`
  color: ${(props) => props.theme.palette.text.main};
  width: 100%;
  border-spacing: 0 5px;
`;

const StylTableHead = styled.thead`
  color: ${(props) => props.theme.palette.text.primary};
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  line-height: 24px;
  background-color: ${(props) => props.theme.palette.backgroundColor.main};
  white-space: nowrap;
`;

const StylTableHeadRow = styled.tr``;

const StylTableHeaderColumn = styled.th`
  text-align: left;
  padding: 20px 40px;
`;

const StylTableRow = styled.tr`
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  line-height: 24px;
  background-color: ${(props) => props.theme.palette.backgroundColor.main};
  box-shadow: 0 4px 32px rgba(218, 228, 255, 0.24);
`;

const StylTableCell = styled.td`
  padding: 20px 40px;
  border-radius: 4px;
`;

const StyledArrow = styled.img`
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  padding-left: 12px;
`;

export {
  StylTable,
  StylTableHead,
  StylTableHeadRow,
  StylTableHeaderColumn,
  StylTableRow,
  StylTableCell,
  StyledArrow,
};
