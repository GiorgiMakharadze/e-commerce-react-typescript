import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import Wrapper from "../assets/wrappers/AddToCart";
import AmountButtons from "./AmountButtons";
import { IProduct } from "../types";

const AddToCart = ({ single_product }: { single_product: IProduct }) => {
  const { id, stock, colors } = single_product;
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
        <Link to="/cart" className="btn">
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

export default AddToCart;
