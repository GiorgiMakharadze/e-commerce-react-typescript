import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { links } from "../utils/constants";
import logo from "../assets/logo.svg";
import CartButtons from "./CartButtons";
import NavContainer from "../assets/wrappers/NavBar";

const Nav = () => {
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="comfy sloth logo" />
          </Link>
          <button type="button" className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

export default Nav;
