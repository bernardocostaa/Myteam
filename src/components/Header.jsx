import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../imgs/logo.svg";

const Header = () => {
  return (
    <header className="bg-MidnightGreen">
      <nav className="customContainer mx-auto px-5 items-center flex justify-between pt-16 fontBody-1">
        <ul className="flex items-center gap-10 text-white ">
          <li className="mr-10">
            <Link className="p-2" to="/">
              <img src={logo} alt="Logo da empresa" />
            </Link>
          </li>
          <li>
            <NavLink
              className="p-2  hover:text-LightCoral duration-300"
              to="/"
              end
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="p-2  hover:text-LightCoral duration-300"
              to="about"
            >
              about
            </NavLink>
          </li>
        </ul>
        <Link
          className="text-white border-2 duration-300 border-white rounded-3xl py-2.5 px-8 hover:bg-white hover:text-DarkGreen"
          to="contact"
        >
          contact us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
