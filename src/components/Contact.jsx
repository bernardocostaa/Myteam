import React from "react";
import Styles from "./css/Contact.module.css";
import person from "../imgs/icon-person.svg";
import conf from "../imgs/icon-cog.svg";
import graph from "../imgs/icon-chart.svg";

const Contact = () => {
  return (
    <section className={`${Styles.bgSection}`}>
      <div className="customContainer mx-auto px-5 relative z-20">
        <div className="flex flex-col desktop:flex-row">
          <div className="flex-1 laptop:max-w-[515px] mx-auto">
            <div className="text-center desktop:text-start">
              <h1 className="fontH1Small text-white font-bold flex-2 w-full laptop:mb-4">
                Contact
              </h1>
              <h2 className="text-LightCoral font-bold fontH2">Ask us about</h2>
            </div>
            <div>
              <div className="flex mt-10 items-center gap-5">
                <img className="w-[72px]" src={person} alt="" />
                <div>
                  <p className="text-white text-lg font-bold ">
                    The quality of our talent network
                  </p>
                </div>
              </div>
              <div className="flex mt-10 items-center gap-5">
                <img className="w-[72px]" src={conf} alt="" />
                <div>
                  <p className="text-white text-lg font-bold ">
                    Usage & implementation of our software
                  </p>
                </div>
              </div>
              <div className="flex mt-10 items-center gap-5">
                <img className="w-[72px]" src={graph} alt="" />
                <div>
                  <p className="text-white text-lg font-bold ">
                    How we help drive innovation
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-14 flex-1 max-w-[540px] mx-auto w-full ">
            <form className="flex flex-col gap-6 " autoComplete="new-password">
              <div>
                <input
                  className="bg-transparent pb-4 pl-3 border-b focus:border-RaptureBlue border-white w-full text-white font-bold border-0 outline-none placeholder:fontBody-2"
                  autoComplete="new-password"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  className="bg-transparent pb-4 pl-3 border-b border-white focus:border-RaptureBlue w-full text-white font-bold border-0 outline-none placeholder:fontBody-2"
                  autoComplete="new-password"
                  type="text"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <input
                  className="bg-transparent pb-4 pl-3 border-b border-white focus:border-RaptureBlue w-full text-white font-bold border-0 outline-none placeholder:fontBody-2"
                  autoComplete="new-password"
                  type="text"
                  placeholder="Company Name"
                />
              </div>
              <div>
                <input
                  className="bg-transparent pb-4 pl-3 border-b border-white focus:border-RaptureBlue w-full text-white font-bold border-0 outline-none placeholder:fontBody-2"
                  autoComplete="new-password"
                  type="text"
                  placeholder="Title"
                />
              </div>
              <div>
                <textarea
                  className="bg-transparent pb-4 pl-3 border-b border-white focus:border-RaptureBlue w-full text-white font-bold border-0 outline-none placeholder:fontBody-2 resize-none"
                  autoComplete="new-password"
                  placeholder="Message"
                  
                ></textarea>
              </div>
              <div>
                <button className="py-2.5 px-8 bg-white text-DarkGreen rounded-3xl fontMenu duration-300 hover:bg-LightCoral">submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
