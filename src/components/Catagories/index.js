import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./index.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="catagories-bar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <p className="catagories-desc">See all Catagories</p>
            <div className="triangle"></div>
          </div>

          <Link className="linkStyle" to="/listing/Printing Material">
            <p className="display-catagories">Printing Material</p>
          </Link>
          <Link className="linkStyle" to="/listing/Printing Service">
            <p className="display-catagories">Printing Services</p>
          </Link>
          <Link className="linkStyle" to="/listing/machinary">
            <p className="display-catagories">Printing Machinary</p>
          </Link>
          <Link className="linkStyle" to="/listing/machinary">
            <p className="display-catagories">Clothing</p>
          </Link>
          <Link className="linkStyle" to="/listing/hardware">
            <p className="display-catagories">Electronics</p>
          </Link>
          <Link className="linkStyle" to="/listing/hardware">
            <p className="display-catagories">IT & Computer Acessories</p>
          </Link>
          <a className="display-catagories">Web & App Development</a>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
