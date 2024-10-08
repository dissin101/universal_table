import Table from "../components/Table";
import { IProduct, IProductOptions } from "../interfaces/products";

const ProductsPage = () => {
  /**
   * Моки
   */
  const data: IProduct[] = [
    {
      id: 14381328,

      name: "id quis voluptate nostrud",

      options: {
        size: "XL",

        amount: 100,
      },

      active: true,

      createdAt: "1985-08-09T02:10:18.0Z",
    },

    {
      id: 26785188,

      name: "esse elit",

      options: {
        size: "S",

        amount: 10,
      },

      active: true,

      createdAt: "1956-03-20T08:59:40.0Z",
    },

    {
      id: 63878634,

      name: "enim",

      options: {
        size: "L",

        amount: 20,
      },

      active: false,

      createdAt: "2016-07-27T16:05:57.0Z",
    },

    {
      id: 79901249,

      name: "eu ad",

      options: {
        size: "XXL",

        amount: 1000,
      },

      active: true,

      createdAt: "1988-08-20T03:53:24.0Z",
    },

    {
      id: 53113051,

      name: "proident ipsum",

      options: {
        size: "XL",

        amount: 4,
      },

      active: true,

      createdAt: "2003-01-19T20:09:29.0Z",
    },
  ];

  /**
   * Привел примеры рендеринга кастомных ячеек.
   * Все кастомно рендерить не стал
   */
  return (
    <Table
      data={data}
      renderCustomHeaderCell={(key) => {
        if (key === "options") return "Характеристики";
      }}
      renderCustomBodyCell={(key, value) => {
        if (key === "createdAt") {
          const date = new Date(value as string);

          return `
            ${date.getDate().toString().padStart(2, "0")}.${date.getMonth().toString().padStart(2, "0")}.${date.getFullYear()}${" "}
            ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
        }

        if (key === "options") {
          const optionsData = value as IProductOptions;

          return `Size: ${optionsData.size}, Amount: ${optionsData.amount}`;
        }
      }}
    />
  );
};

export default ProductsPage;
