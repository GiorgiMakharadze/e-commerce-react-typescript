import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../context/actions";

export interface ISidebarOpen {
  type: typeof SIDEBAR_OPEN;
}
export interface ISidebarClose {
  type: typeof SIDEBAR_CLOSE;
}

export type IActionProps = ISidebarOpen | ISidebarClose;
