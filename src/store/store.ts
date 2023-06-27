import { create } from "zustand";
import HttpStatus from "http-status-codes";
import { IProductStoreProps } from "../types";

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
}));

export default productsStore;
