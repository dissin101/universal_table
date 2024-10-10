import React from "react";
import MemoizedTableCell from "./MemoizedTableCell";
import { TableRow } from "./styles";
import { TRenderCustomBodyCell } from "./interface";

interface IMemoizedTableRowProps<T> {
  rowIndex: number;
  dataKeys: string[];
  row: T;
  renderCustomBodyCell?: TRenderCustomBodyCell<T>;
}

const MemoizedTableRow = <T,>({
  rowIndex,
  dataKeys,
  renderCustomBodyCell,
  row,
}: IMemoizedTableRowProps<T>) => {
  return (
    <TableRow>
      {dataKeys.map((key, cellIndex) => (
        <MemoizedTableCell
          content={
            renderCustomBodyCell?.(key as keyof T, row[key as keyof T]) !==
            undefined
              ? renderCustomBodyCell(key as keyof T, row[key as keyof T], row)
              : String(row[key as keyof T])
          }
          key={`cell-${rowIndex}-${cellIndex}`}
        />
      ))}
    </TableRow>
  );
};

export default React.memo(MemoizedTableRow, (prevProps, nextProps) => {
  return prevProps.row === nextProps.row;
}) as <T>(props: IMemoizedTableRowProps<T>) => React.ReactElement;
