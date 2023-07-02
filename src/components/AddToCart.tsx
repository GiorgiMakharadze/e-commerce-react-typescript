import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import Wrapper from "../assets/wrappers/AddToCart";
import AmountButtons from "./AmountButtons";
import { useCartContext } from "../context/cart_context";
import { IProduct } from "../types";

const AddToCart = ({ product }: { product: IProduct }) => {
  const { addToCart } = useCartContext();
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <Wrapper>
      <div className="colors">
        <span>colors :</span>
        <div>
          {colors.map((color: string, index: number) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={`${
                  mainColor === color ? "color-btn-active" : "color-btn"
                }`}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart(id, mainColor, amount, product)}
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

export default AddToCart;
