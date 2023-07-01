import { Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/Filters";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: { text, company, color, min_price, price, max_price, shipping },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();
  return (
    <Wrapper>
      <div className="content">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
        </Form>
      </div>
    </Wrapper>
  );
};

export default Filters;
