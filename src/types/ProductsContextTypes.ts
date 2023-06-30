interface Image {
  url: string;
}

export interface IProduct {
  map(
    arg0: (product: IProduct[]) => import("react/jsx-runtime").JSX.Element
  ): import("react").ReactNode;
  id: string;
  name: string;
  price: number;
  image: string;
  images: Image[];
  stock: boolean | any;
  colors: string[];
  company: string;
  description: string;
  featured: boolean;
  category: string;
  shipping: boolean;
  stars: number;
  reviews: number;
}

export interface IProductImagesProps {
  images?: Image[];
}

export interface IProductContextProps {
  products: IProduct[];
  featured_products: IProduct[];
  single_product: IProduct | {};
  filtered_products: IProduct[];
  products_loading: boolean;
  products_error: boolean;
  single_product_loading: boolean;
  single_product_error: boolean;
  isSidebarOpen: boolean;
  openSidebar?: () => void;
  closeSidebar?: () => void;
  fetchProducts?: (url: string) => Promise<void>;
  fetchFeaturedProduct?: () => Promise<void>;
  fetchSingleProduct?: (id: string) => Promise<void>;
}
