import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../context/actions";

export interface ISidebarOpen {
  type: typeof SIDEBAR_OPEN;
}
export interface ISidebarClose {
  type: typeof SIDEBAR_CLOSE;
}
export interface IGetProductsBegin {
  type: typeof GET_PRODUCTS_BEGIN;
  payload?: any;
}
export interface IGetProductsSuccess {
  type: typeof GET_PRODUCTS_SUCCESS;
  payload?: any;
}
export interface IGetProductsError {
  type: typeof GET_PRODUCTS_ERROR;
  payload?: any;
}
export interface IGetSingleProductBegin {
  type: typeof GET_SINGLE_PRODUCT_BEGIN;
  payload?: any;
}
export interface IGetSingleProductSuccess {
  type: typeof GET_SINGLE_PRODUCT_SUCCESS;
  payload?: any;
}
export interface IGetSingleProductError {
  type: typeof GET_SINGLE_PRODUCT_ERROR;
  payload?: any;
}

export type IActionProps =
  | ISidebarOpen
  | ISidebarClose
  | IGetProductsBegin
  | IGetProductsSuccess
  | IGetProductsError
  | IGetSingleProductBegin
  | IGetSingleProductSuccess
  | IGetSingleProductError;
