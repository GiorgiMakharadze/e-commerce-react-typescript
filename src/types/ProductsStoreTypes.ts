export interface IProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  colors: string[];
  company: string;
  description: string;
  featured: boolean;
  category: string;
  shipping: boolean;
}

export interface IProductStoreProps {
  products: IProduct[];
  featured_products: IProduct[];
  loading: boolean;
  error: string | null;
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  fetchProducts: () => Promise<void>;
  fetchFeaturedProduct: () => Promise<void>;
}
