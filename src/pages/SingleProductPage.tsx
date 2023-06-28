import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import productsStore from "../store/ProductStore";
import {
  Loading,
  Error,
  PageHero,
  ProductImages,
  Stars,
  AddToCart,
} from "../components";
import Wrapper from "../assets/wrappers/SingleProducts";

import { formatPrice } from "../utils/helpers";

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { loading, error, fetchSingleProduct, single_product } =
    productsStore();

  useEffect(() => {
    fetchSingleProduct(id || "");
  }, [id, fetchSingleProduct]);
  console.log(single_product);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if ("name" in single_product) {
    const {
      name,
      price,
      description,
      stock,
      stars,
      reviews,
      id: sku,
      company,
      images,
    } = single_product;

    return (
      <Wrapper>
        <PageHero title={name} product />
        <div className="section section-center page">
          <Link to="/products" className="btn">
            Back to products
          </Link>
          <div className="product-center">
            <ProductImages images={images} />
            <section className="content">
              <h2>{name}</h2>
              <Stars stars={stars} reviews={reviews} />
              <h5 className="price">{formatPrice(price)}</h5>
              <p className="desc">{description}</p>
              <p className="info">
                <span>Available :</span>
                {stock > 0 ? "In stock" : "Out of stock"}
              </p>
              <p className="info">
                <span>SKU :</span>
                {sku}
              </p>
              <p className="info">
                <span>Brand :</span>
                {company}
              </p>
              <hr />
              {stock > 0 && <AddToCart single_product={single_product} />}
            </section>
          </div>
        </div>
      </Wrapper>
    );
  }
};

export default SingleProductPage;
