import React from "react";
import { TableBody, TableHeader, TableRow, TableWrapper } from "./styles";
import {
  TActionKey,
  TRenderCustomBodyCell,
  TRenderCustomHeaderCell,
} from "./interface";
import MemoizedTableCell from "./MemoizedTableCell";
import MemoizedTableRow from "./MemoizedTableRow";

interface ITableProps<T> {
  data: T[];
  renderCustomHeaderCell?: TRenderCustomHeaderCell<T>;
  renderCustomBodyCell?: TRenderCustomBodyCell<T>;
}

const Table = <T,>({
  data,
  renderCustomHeaderCell,
  renderCustomBodyCell,
}: ITableProps<T>) => {
  if (!data.length) return <span>Список пуст</span>;

  const dataKeys = [
    ...Object.keys(data[0] as Array<keyof T>),
    "action" as TActionKey,
  ];

  return (
    <TableWrapper>
      <TableHeader>
        <TableRow>
          {dataKeys.map((key, index) => (
            <MemoizedTableCell
              content={
                renderCustomHeaderCell?.(key as keyof T) !== undefined
                  ? renderCustomHeaderCell(key as keyof T)
                  : key
              }
              key={`header-${key}-${index}`}
            />
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <MemoizedTableRow
            rowIndex={rowIndex}
            key={rowIndex}
            dataKeys={dataKeys}
            renderCustomBodyCell={renderCustomBodyCell}
            row={row}
          />
        ))}
      </TableBody>
    </TableWrapper>
  );
};

export default Table;
