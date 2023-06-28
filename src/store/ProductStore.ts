import axios from "axios";
import { create } from "zustand";
import HttpStatus from "http-status-codes";
import { IProductStoreProps, IProduct } from "../types";

const dataFetch = axios.create({
  baseURL: `
  https://course-api.com`,
});

const url = `/react-store-products`;
const url2 = `/react-store-single-product?id=`;

dataFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === HttpStatus.UNAUTHORIZED) {
      console.log(error);
      return;
    }
    return Promise.reject(error);
  }
);

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

const productsStore = create<IProductStoreProps>((set) => ({
  products: [],
  featured_products: [],
  loading: false,
  error: null,
  isSidebarOpen: false,

  openSidebar: () => {
    try {
      set({ isSidebarOpen: true });
    } catch (error) {
      handleError(error, set);
    }
  },
  closeSidebar: () => {
    try {
      set({ isSidebarOpen: false });
    } catch (error) {
      handleError(error, set);
    }
  },
  fetchProducts: async () => {
    try {
      set({ loading: true });

      const response = await dataFetch.get(url);

      set({
        products: response.data,
        error: null,
      });
    } catch (error) {
      handleError(error, set);
    } finally {
      set({ loading: false });
    }
  },
  fetchFeaturedProduct: async () => {
    try {
      set({ loading: true });
      const response = await dataFetch.get(url);
      const featuredProduct = response.data.filter(
        (product: IProduct) => product.featured === true
      );

      set({
        featured_products: featuredProduct,
        error: null,
      });
    } catch (error: Error | any) {
      handleError(error, set);
    } finally {
      set({ loading: false });
    }
  },
}));

export default productsStore;
