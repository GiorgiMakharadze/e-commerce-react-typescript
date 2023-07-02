import { useCartContext } from "../context/cart_context";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import CartTotals from "./CartTotals";
import Wrapper from "../assets/wrappers/CarContent";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-center">
        <Link to="/products" className="link-btn">
          Continue shopping
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={clearCart}
        >
          Clear shopping cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};

export default CartContent;