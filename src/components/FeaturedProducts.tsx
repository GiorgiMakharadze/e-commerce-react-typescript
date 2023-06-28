import { useEffect } from "react";
import productsStore from "../store/ProductStore";
import Wrapper from "../assets/wrappers/FeaturedProducts";
import Loading from "./Loading";
import Error from "./Error";
import Product from "./Product";

const FeaturedProducts = () => {
  const { loading, error, fetchFeaturedProduct, featured_products } =
    productsStore();

  useEffect(() => {
    fetchFeaturedProduct();
  }, [fetchFeaturedProduct]);
  console.log(featured_products);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featured_products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

export default FeaturedProducts;
