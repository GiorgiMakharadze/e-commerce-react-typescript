import { Link } from "react-router-dom";
import { IProduct } from "../types";
import Wrapper from "../assets/wrappers/PageHero";

const PageHero = ({ title, product }: { title: string; product: boolean }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>
          {product && <Link to="/products">/ Products</Link>}
          {""}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

export default PageHero;
