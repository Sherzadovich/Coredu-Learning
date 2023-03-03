import React from "react";
import logo from "../../assets/Images/logo svg.svg";
import "../Header/Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink to="/" className="logo">
        <img src={logo} alt="logo" />
      </NavLink>

      <ul className="nav__list">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active nav__link" : "nav__link"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active nav__link" : "nav__link"
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active nav__link" : "nav__link"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active nav__link" : "nav__link"
            }
            to="/posts"
          >
            Posts
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
