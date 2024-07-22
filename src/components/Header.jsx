import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../imgs/logo.svg";
import BtnMobile from "../imgs/icon-hamburger.svg";

const Header = () => {
  const [menuMobile, setMenuMobile] = React.useState(false);
  const toggleBodyOverflow = () => {
    document.body.classList.toggle("overflow-hidden");
  };
  return (
    <header className="bg-MidnightGreen relative">
      <nav className="customContainer mx-auto px-5 items-center flex justify-between pt-6 desktop:pt-16 fontMenu">
        <div className="mr-10">
          <Link className="p-2" to="/">
            <img src={logo} alt="Logo da empresa" />
          </Link>
        </div>
        <button
          onClick={() => {
            setMenuMobile(!menuMobile);
            toggleBodyOverflow();
          }}
          className=" laptop:hidden  block"
        >
          <img src={BtnMobile} alt="Botao menu mobile" />
        </button>
        <div className="hidden laptop:flex justify-between w-full">
          <ul className="flex items-center gap-10 text-white ">
            <li>
              <NavLink
                className="p-2   hover:text-LightCoral duration-300"
                to="/"
                end
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="p-2   hover:text-LightCoral duration-300"
                to="about"
              >
                about
              </NavLink>
            </li>
          </ul>
          <Link
            className="text-white  border-2 duration-300 border-white rounded-3xl py-2.5 px-8 hover:bg-white hover:text-DarkGreen"
            to="contact"
          >
            contact us
          </Link>
        </div>
        {menuMobile && (
          <div className="block laptop:hidden absolute bg-menu-mobile top-0 right-0 max-w-[255px] w-full min-h-screen z-10 pt-14 bg">
            <button
              onClick={() => {
                setMenuMobile(!menuMobile);
                toggleBodyOverflow();
              }}
              className="text-white text-[2rem] absolute right-6  hover:text-LightCoral"
            >
              X
            </button>
            <ul className="text-white pt-10 px-12">
              <li className="mb-6">
                <NavLink
                  className="p-2  hover:text-LightCoral duration-300"
                  to="/"
                  end
                >
                  home
                </NavLink>
              </li>
              <li className="mb-6">
                <NavLink
                  className="p-2  hover:text-LightCoral duration-300"
                  to="about"
                >
                  about
                </NavLink>
              </li>
              <Link
                className="text-white block mt-3 border-2 duration-300 border-white rounded-3xl py-2.5 px-8 hover:bg-white hover:text-DarkGreen"
                to="contact"
              >
                contact us
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
