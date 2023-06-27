export interface IProductStoreProps {
  loading: boolean;
  error: string | null;
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}
