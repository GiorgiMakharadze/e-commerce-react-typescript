import { FaPlus, FaMinus } from "react-icons/fa";
import { IAmountButtonsProps } from "../types";
import Wrapper from "../assets/wrappers/AmountButtons";

const AmountButtons = ({ increase, decrease, amount }: IAmountButtonsProps) => {
  return (
    <Wrapper className="amount-btns">
      <button type="button" className="amount-btn" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button type="button" className="amount-btn" onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};
export default AmountButtons;
