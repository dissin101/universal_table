export interface IProduct {
  id: number;
  name: string;
  options: IProductOptions;
  active: boolean;
  createdAt: string;
}

export interface IProductOptions {
  size: string;
  amount: number;
}
