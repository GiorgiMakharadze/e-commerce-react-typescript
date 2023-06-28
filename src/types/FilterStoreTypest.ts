import { IProduct } from ".";

export interface IFilterStoreProps {
  products: IProduct[];
  filtered_products: IProduct[];
  all_products: IProduct[];
  loading: boolean;
  error: string | null;
}
