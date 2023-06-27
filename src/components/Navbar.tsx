import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import NavContainer from "../assets/wrappers/NavBar";
import { links } from "../utils/constants";
import logo from "../assets/logo.svg";

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
      </div>
    </NavContainer>
  );
};

export default Nav;
