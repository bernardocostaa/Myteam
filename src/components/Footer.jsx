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
        <div className="customContainer mx-auto px-5 flex items-center justify-around py-16">
          <h1 className="fontH2 text-DarkGreen">Ready to get started?</h1>
          <Link
            to="contact"
            className="text-SacramentoStateGreen border-2 duration-300 fontBody-1 border-SacramentoStateGreen rounded-3xl py-2.5 px-8 hover:bg-SacramentoStateGreen hover:text-white"
          >
            contact us
          </Link>
        </div>
      </section>
      <footer className="bg-DarkGreen py-12">
        <div className="customContainer mx-auto px-5 flex justify-between">
          <div className="flex gap-32">
            <div>
              <img className="mb-10" src={logo} alt="logo da empresa" />
              <ul className=" flex gap-10 fontBody-1 text-white">
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
            <div className="text-white fontBody-2 opacity-60">
              <p>987 Hillcrest Lane</p>
              <p>Irvine, CA</p>
              <p>California 92714</p>
              <p>Call Us : 949-833-7432</p>
            </div>
          </div>
          <div>
            <ul className="flex gap-4 justify-end mb-10">
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
            <p className="text-white fontBody-2 opacity-60">
              Copyright 2020. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
