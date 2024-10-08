import styled from "styled-components";

export const TableWrapper = styled("table")``;

export const TableHeader = styled("thead")`
  font-size: 16px;
  font-weight: 500;
`;

export const TableBody = styled("tbody")``;

export const TableRow = styled("tr")`
  padding: 16px;

  &:nth-child(odd) {
    background: #f0f0f0;
  }
`;

export const TableCell = styled("td")`
  padding: 16px;
`;
