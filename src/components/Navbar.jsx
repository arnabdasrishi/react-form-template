import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar__main">
      <h2>Form Template</h2>
      <div className="nav__links__main">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/datalist">
          <p>DataLists</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
