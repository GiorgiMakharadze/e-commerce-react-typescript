import { GridView, ListView } from ".";
import { useProductsContext } from "../context/products_context";
const ProductList = () => {
  const { filtered_products: products } = useProductsContext();
  console.log(products);

  return <GridView products={products}>product list</GridView>;
};

export default ProductList;
