import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import productsStore from "../store/ProductStore";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Wrapper from "../assets/wrappers/SingleProducts";
import { PageHero } from "../components";
import ProductImages from "../components/ProductImages";
import Stars from "../components/Stars";
import { formatPrice } from "../utils/helpers";
import AddToCart from "../components/AddToCart";

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
              <Stars />
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
              {stock > 0 && <AddToCart />}
            </section>
          </div>
        </div>
      </Wrapper>
    );
  }
};

export default SingleProductPage;
