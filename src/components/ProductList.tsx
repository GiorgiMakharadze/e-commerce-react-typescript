import { GridView, ListView } from ".";
import { useFilterContext } from "../context/filter_context";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  console.log(products);
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no Product matched your search...
      </h5>
    );
  }
  if (grid_view === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products}>product list</GridView>;
};

export default ProductList;
