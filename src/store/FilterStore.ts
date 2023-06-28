import { create } from "zustand";
import HttpStatus from "http-status-codes";
import productsStore from "./ProductStore";
import { IFilterStoreProps } from "../types";

const handleError = (
  error: Error | any,
  set: (obj: { error: string }) => void
) => {
  if (error.response) {
    set({ error: HttpStatus.getStatusText(error.response.status) });
  } else {
    set({ error: error.message });
  }
};

const { products } = productsStore();

const filterStore = create<IFilterStoreProps>((set) => ({
  filtered_products: [],
  all_products: [],
  loading: false,
  error: null,
}));

export default filterStore;
