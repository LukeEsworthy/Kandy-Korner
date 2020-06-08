import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <h1 className="site-title">
        Kandy Korner
        <br />
        <small>Overpriced candies for undeserving brats</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/locations">
              Locations
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/employees">
              Employees
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
