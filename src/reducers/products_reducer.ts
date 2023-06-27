import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../context/actions";
import { IContextStateProps, IActionProps } from "../types";

const products_reducer = (state: any, action: IActionProps) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
