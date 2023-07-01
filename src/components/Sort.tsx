import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";
import Wrapper from "../assets/wrappers/Sort";
import { Form } from "react-router-dom";

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();
  return (
    <Wrapper>
      <div className="btn-container">
        <button
          type="button"
          className={`${grid_view ? "active" : null}`}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          type="button"
          className={`${!grid_view ? "active" : null}`}
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>
      <p>{products?.length} products found</p>
      <hr />
      <Form>
        <label htmlFor="sort">sort by</label>
        <select
          name="sort"
          id="sort"
          value={sort}
          onChange={updateSort}
          className="sort-input"
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a - z)</option>
          <option value="name-z">name (z - a)</option>
        </select>
      </Form>
    </Wrapper>
  );
};

export default Sort;
