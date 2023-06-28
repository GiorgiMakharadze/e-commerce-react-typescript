import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import productsStore from "../store/ProductStore";
import Wrapper from "../assets/wrappers/CartButtons";

const CartButtons = () => {
  const { closeSidebar } = productsStore();

  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
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
