import React, { ReactElement } from "react";
import {
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableWrapper,
} from "./styles";

type TCellContent = ReactElement | string | null | undefined;

interface ITableProps<T> {
  data: T[];
  renderCustomHeaderCell?: (key: keyof T | "action") => TCellContent;
  renderCustomBodyCell?: (
    key: keyof T | "action",
    value: T[keyof T],
    row?: T,
  ) => TCellContent;
}

const Table = <T,>({
  data,
  renderCustomHeaderCell,
  renderCustomBodyCell,
}: ITableProps<T>) => {
  const dataKeys = [
    ...Object.keys(data[0] as Array<keyof T>),
    "action" as "action",
  ];

  const renderTableCell = (content: TCellContent, key: string) => {
    if (!content) return null;

    return <TableCell key={key}>{content}</TableCell>;
  };

  if (!data.length) return <span>Список пуст</span>;

  return (
    <TableWrapper>
      <TableHeader>
        <TableRow>
          {dataKeys.map((key, index) =>
            renderTableCell(
              renderCustomHeaderCell?.(key as keyof T) !== undefined
                ? renderCustomHeaderCell(key as keyof T)
                : key,
              `header-${key}-${index}`,
            ),
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {dataKeys.map((key, cellIndex) =>
              renderTableCell(
                renderCustomBodyCell?.(key as keyof T, row[key as keyof T]) !==
                  undefined
                  ? renderCustomBodyCell(
                      key as keyof T,
                      row[key as keyof T],
                      row,
                    )
                  : String(row[key as keyof T]),
                `cell-${rowIndex}-${cellIndex}`,
              ),
            )}
          </TableRow>
        ))}
      </TableBody>
    </TableWrapper>
  );
};

export default Table;
