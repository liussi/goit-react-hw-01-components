import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const TableHead = styled.thead`
  background-color: turquoise;
  color: white;
`;

export const TableRow = styled.tr`
 background-color: #FFFFFF;

  &:nth-of-type(odd) {
    background-color: #f2f2f2;
  }
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
 
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #ddd;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: left;
`;