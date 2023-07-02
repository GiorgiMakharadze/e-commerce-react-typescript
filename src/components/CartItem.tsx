import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import Wrapper from "../assets/wrappers/CartItem";
import { ICartItem } from "../types";

const CartItem = ({ id, image, name, color, price, amount }: ICartItem) => {
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    console.log("+");
  };
  const decrease = () => {
    console.log("-");
  };

  if (!price) return null;

  return (
    <Wrapper>
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h5 className="name">{name}</h5>
          <p className="color">
            color : <span style={{ background: color }}></span>
          </p>
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <div className="price">{formatPrice(price)}</div>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className="subtotal">
        {price && amount ? formatPrice(price * amount) : "N/A"}
      </h5>
      <button
        type="button"
        className="remove-btn"
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  );
};

export default CartItem;
