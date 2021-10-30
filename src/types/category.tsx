import { IProduct } from "./product";

export interface ICategory {
  id: string;
  title: string;
  products: IProduct[];
}
