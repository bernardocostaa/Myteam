import React from "react";
import Styles from "./css/Home.module.css";

const Home = () => {
  return (
    <>
    <section className={`${Styles.bgSection}`}>
      <div className="desktop:container mx-auto px-5">
        <div className="flex">
          <h1 className="fontH1 text-white font-bold flex-2 w-625 ">
            Find the <br /> best <span className="text-LightCoral">talent</span>
          </h1>
          <div className="relative flex-1 justify-between  before:w-12 before:h-1 before:bg-RaptureBlue before:relative flex flex-col">
            <p className="fontBody-1 text-white">
              Finding the right people and building high performing teams can be
              hard. Most companies aren’t tapping into the abundance of global
              talent. We’re about to change that.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      
    </section>
    </>
  );
};

export default Home;
