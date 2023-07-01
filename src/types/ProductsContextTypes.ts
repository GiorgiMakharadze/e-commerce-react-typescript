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
  filtered_products?: IProduct[];
  filters: {
    text: string;
    company: string;
    category: string;
    color: string;
    min_price: number;
    max_price: number;
    price: number;
    shipping: boolean;
  };
  sort?: string;
}

export interface IProductImagesProps {
  images?: Image[];
}

export interface IProductContextProps {
  products?: IProduct[];
  featured_products?: IProduct[];
  single_product?: IProduct | {};
  filtered_products?: IProduct[];
  all_products?: IProduct[];
  products_loading?: boolean;
  products_error?: boolean;
  single_product_loading?: boolean;
  single_product_error?: boolean;
  isSidebarOpen?: boolean;
  grid_view?: boolean;
  sort?: string;
  filters: {
    text: string;
    company: string;
    category: string;
    color: string;
    min_price: number;
    max_price: number;
    price: number;
    shipping: boolean;
  };
  openSidebar?: () => void;
  closeSidebar?: () => void;
  setGridView?: () => void;
  setListView?: () => void;
  updateSort?: () => void;
  updateFilters?: (e: any) => void;
  clearFilters?: (e: any) => void;
  fetchProducts?: (url: string) => Promise<void>;
  fetchFeaturedProduct?: () => Promise<void>;
  fetchSingleProduct?: (id: string) => Promise<void>;
}
