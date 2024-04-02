import React from "react";
import Styles from "./css/Home.module.css";
import person from "../imgs/icon-person.svg";
import conf from "../imgs/icon-cog.svg";
import graph from "../imgs/icon-chart.svg";

const Home = () => {
  return (
    <>
      <section className={`${Styles.bgSection}`}>
        <div className="customContainer mx-auto px-5">
          <div className="flex">
            <h1 className="fontH1 text-white font-bold flex-2 w-625 ">
              Find the <br /> best{" "}
              <span className="text-LightCoral">talent</span>
            </h1>
            <div className="relative flex-1 justify-between  before:w-12 before:h-1 before:bg-RaptureBlue before:relative flex flex-col">
              <p className="fontBody-1 text-white">
                Finding the right people and building high performing teams can
                be hard. Most companies aren’t tapping into the abundance of
                global talent. We’re about to change that.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={Styles.bgSectionMore}>
        <div className="customContainer mx-auto px-5">
          <div className="flex justify-between">
            <h1 className="text-white fontH2 max-w-md relative  before:w-12 before:h-1 before:bg-LightCoral before:absolute before:-top-[50px]">
              Build & manage distributed teams like no one else.
            </h1>
            <div className="max-w-lg">
              <div className="flex gap-5 mb-8 items-start">
                <img className="w-20" src={person} alt="" />

                <div>
                  <p className="fontBody-1 text-LightCoral mb-4">
                    Experienced Individuals
                  </p>
                  <p className="text-white fontBody-2 ">
                    Our network is made up of highly experienced professionals
                    who are passionate about what they do.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 mb-8 items-start">
                <img className="w-20" src={conf} alt="" />

                <div>
                  <p className="fontBody-1 text-LightCoral mb-4	">
                    Easy to Implement
                  </p>
                  <p className="text-white fontBody-2">
                    Our processes have been refined over years of implementation
                    meaning our teams always deliver.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 mb-8 items-start">
                <img className="w-20" src={graph} alt="" />
                <div>
                  <p className="fontBody-1 text-LightCoral mb-4	">
                    Enhanced Productivity
                  </p>
                  <p className="text-white fontBody-2">
                    Our customized platform with in-built analytics helps you
                    manage your distributed teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
