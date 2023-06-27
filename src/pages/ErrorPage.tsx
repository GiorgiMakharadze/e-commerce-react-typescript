import Wrapper from "../assets/wrappers/ErrorPage";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to="/">Back home</Link>
      </section>
    </Wrapper>
  );
};

export default Error;
