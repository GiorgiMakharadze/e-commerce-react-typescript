import { useParams, useNavigate } from "react-router-dom";
import productsStore from "../store/ProductStore";
import { useEffect } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
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

  console.log(single_product);

  return <div></div>;
};

export default SingleProductPage;
