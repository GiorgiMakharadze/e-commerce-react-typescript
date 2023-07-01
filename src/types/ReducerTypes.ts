import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../context/actions";
import { IProduct } from ".";

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
export interface ILoadProductsBegin {
  type: typeof LOAD_PRODUCTS;
  payload?: any;
}
export interface ISetListView {
  type: typeof SET_LISTVIEW;
}
export interface ISetGridView {
  type: typeof SET_GRIDVIEW;
}
export interface IUpdateSort {
  type: typeof UPDATE_SORT;
  payload: any;
}
export interface ISortProducts {
  type: typeof SORT_PRODUCTS;
}
export interface IUpdateFilter {
  type: typeof UPDATE_FILTERS;
  payload: any;
}
export interface IFilterProducts {
  type: typeof FILTER_PRODUCTS;
}
export interface IClearFilters {
  type: typeof CLEAR_FILTERS;
  payload: any;
}

export type IActionProps =
  | ISidebarOpen
  | ISidebarClose
  | IGetProductsBegin
  | IGetProductsSuccess
  | IGetProductsError
  | IGetSingleProductBegin
  | IGetSingleProductSuccess
  | IGetSingleProductError
  | ILoadProductsBegin
  | ISetListView
  | ISetGridView
  | IUpdateSort
  | ISortProducts
  | IUpdateFilter
  | IFilterProducts
  | IClearFilters;
