import Wrapper from "../assets/wrappers/ProductsPage";
import { PageHero, Filters, ProductList, Sort } from "../components";

const ProductsPage = () => {
  return (
    <main>
      <PageHero title="products" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

export default ProductsPage;
