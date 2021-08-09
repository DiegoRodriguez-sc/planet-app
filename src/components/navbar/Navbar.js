import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="nav">
      <div className="nav-info">
        <div className="logo">the planets</div>
        <FaBars
          className={click ? "menu-btn grey" : "menu-btn"}
          onClick={handleClick}
        />
      </div>
      <div className={click ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink
              to="/mercury"
              activeClassName="mercury-a"
              className="mercury nav-link"
              onClick={closeMobileMenu}
            >
              Mercury
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/venus"
              activeClassName="venus-a"
              className="nav-link venus"
              onClick={closeMobileMenu}
            >
              Venus
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/earth"
              activeClassName="earth-a"
              className="nav-link earth"
              onClick={closeMobileMenu}
            >
              Earth
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/mars"
              activeClassName="mars-a"
              className="nav-link mars"
              onClick={closeMobileMenu}
            >
              Mars
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/jupiter"
              activeClassName="jupiter-a"
              className="nav-link jupiter"
              onClick={closeMobileMenu}
            >
              Jupiter
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/saturn"
              activeClassName="saturn-a"
              className="nav-link saturn"
              onClick={closeMobileMenu}
            >
              Saturn
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/uranus"
              activeClassName="uranus-a"
              className="nav-link uranus"
              onClick={closeMobileMenu}
            >
              Uranus
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/neptune"
              activeClassName="neptune-a"
              className="nav-link neptune"
              onClick={closeMobileMenu}
            >
              Neptune
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
