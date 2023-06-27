import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/CartButtons";

const CartButtons = () => {
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn">
        Cart
        <span className="cart-container">
          <FaShoppingCart />
        </span>
        <span className="cart-value">12</span>
      </Link>
      <button type="button" className="auth-btn">
        Login <FaUserPlus />
      </button>
    </Wrapper>
  );
};

export default CartButtons;
