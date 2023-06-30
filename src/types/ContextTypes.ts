interface Image {
  url: string;
}

export interface IContextStateProps {
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
