import React from "react";
import { TCellContent } from "./interface";
import { TableCell } from "./styles";

interface IMemoizedTableCellProps {
  content: TCellContent;
}

const MemoizedTableCell: React.FC<IMemoizedTableCellProps> = ({ content }) => {
  if (!content) return null;

  return <TableCell>{content}</TableCell>;
};

export default React.memo(MemoizedTableCell);
