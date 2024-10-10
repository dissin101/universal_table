import { ReactElement } from "react";

export type TCellContent = ReactElement | string | null | undefined;

export type TActionKey = "action";

export type TRenderCustomBodyCell<T> = (
  key: keyof T | TActionKey,
  value: T[keyof T],
  row?: T,
) => TCellContent;

export type TRenderCustomHeaderCell<T> = (
  key: keyof T | TActionKey,
) => TCellContent;
