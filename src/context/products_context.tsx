import { useContext, useReducer, createContext } from "react";
import reducer from "../reducers/products_reducer";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "./actions";

const initialState = {
  isSidebarOpen: false,
};

const ProductsContext = createContext(null);

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
