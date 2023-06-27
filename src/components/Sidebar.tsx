import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import SidebarContainer from "../assets/wrappers/SidebarContainer";
import logo from "../assets/logo.svg";
import CartButtons from "./CartButtons";

const Sidebar = () => {
  const isOpen = false;
  return (
    <SidebarContainer>
      <aside className={`${isOpen ? "sidebar show-sidebar" : "sidebar"}`}>
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="comfy sloth logo" />
          <button className="close-btn" type="button">
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          <li>
            <Link to="/checkout">checkout</Link>
          </li>
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
};

export default Sidebar;
