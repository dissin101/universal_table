import { IProduct } from "../interfaces/product";

type TAction = { type: "EDIT_PRODUCT"; payload: IProduct };

interface IState {
  products: IProduct[];
}

export const initialState: IState = {
  products: [
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
  ],
};

export const productReducer = (state: IState, action: TAction): IState => {
  switch (action.type) {
    case "EDIT_PRODUCT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product,
        ),
      };
    default:
      return state;
  }
};
