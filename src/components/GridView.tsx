import { Product } from ".";
import Wrapper from "../assets/wrappers/GridView";
import { IProduct } from "../types";

const GridView = ({
  children,
  products,
}: {
  children: React.ReactNode;
  products: IProduct[];
}) => {
  return (
    <Wrapper>
      {children}
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

export default GridView;
