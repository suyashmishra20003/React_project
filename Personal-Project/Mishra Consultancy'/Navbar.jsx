import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h1 className="nav_heading">MishraConsultancy</h1>

        <div className="nav_items">
          <NavLink className="nav_link" to="/home">
            Home
          </NavLink>
          <NavLink className="nav_link" to="/about">
            About
          </NavLink>
          <NavLink className="nav_link" to="/service">
            Services
          </NavLink>
          <NavLink className="nav_link" to="/contact">
            Contact
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
