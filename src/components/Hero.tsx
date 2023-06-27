import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Hero";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          deleniti sequi culpa? Earum nemo omnis consectetur aperiam
          perspiciatis optio delectus.
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="nice table" className="accent-img" />
      </article>
    </Wrapper>
  );
};

export default Hero;
