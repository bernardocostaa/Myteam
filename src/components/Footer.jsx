import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPinterest,
  faSquareFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <section className="bg-section-footerImg">
        <div className="customContainer flex-col laptop:flex-row mx-auto px-5 flex items-center justify-around laptop:py-16 py-20">
          <h1 className="fontH2 text-DarkGreen mb-6 text-center">Ready to get started?</h1>
          <Link
            to="contact"
            className="text-SacramentoStateGreen border-2 duration-300 fontBody-1 border-SacramentoStateGreen rounded-3xl py-2.5 px-8 hover:bg-SacramentoStateGreen whitespace-nowrap hover:text-white"
          >
            contact us
          </Link>
        </div>
      </section>
      <footer className="bg-DarkGreen py-12">
        <div className="customContainer mx-auto px-5 flex flex-col desktop:flex-row justify-between">
          <div className="flex flex-col items-center laptop:flex-row laptop:justify-between desktop:gap-32">
            <div>
              <img className="desktop:mb-10 mb-6" src={logo} alt="logo da empresa" />
              <ul className=" flex gap-10 mb-6 fontBody-1 text-white">
                <li>
                  <Link
                    className="p-2x  hover:text-LightCoral duration-300"
                    to="/"
                  >
                    home
                  </Link>
                </li>
                <li>
                  <Link
                    className="px-2  hover:text-LightCoral duration-300"
                    to="about"
                  >
                    about
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-white fontBody-2 opacity-60 text-center">
              <p>987 Hillcrest Lane</p>
              <p>Irvine, CA</p>
              <p>California 92714</p>
              <p>Call Us : 949-833-7432</p>
            </div>
          </div>
          <div className="laptop:flex laptop:items-center laptop:justify-between desktop:block ">
            <ul className="flex gap-4 mt-10 justify-center desktop:justify-end mb-4 desktop:mb-14 desktop:mt-0">
              <li>
                <Link
                  className="text-white  hover:text-LightCoral duration-300"
                  to="/"
                >
                  <FontAwesomeIcon size="2xl" icon={faSquareFacebook} />
                </Link>
              </li>
              <li>
                <Link
                  className="text-white  hover:text-LightCoral duration-300"
                  to="/"
                >
                  <FontAwesomeIcon size="2xl" icon={faPinterest} />
                </Link>
              </li>
              <li>
                <Link
                  className="text-white  hover:text-LightCoral duration-300"
                  to="/"
                >
                  <FontAwesomeIcon size="2xl" icon={faTwitter} />
                </Link>
              </li>
            </ul>
            <p className="text-white text-center fontBody-2 opacity-60">
              Copyright 2020. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
