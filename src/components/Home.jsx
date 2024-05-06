import React from "react";
import Styles from "./css/Home.module.css";
import person from "../imgs/icon-person.svg";
import conf from "../imgs/icon-cog.svg";
import graph from "../imgs/icon-chart.svg";
import profile1 from "../imgs/avatar-kady.jpg"
import profile2 from "../imgs/avatar-aiysha.jpg"
import profile3 from "../imgs/avatar-arthur.jpg"
import queote from '../imgs/icon-quotes.svg'

const Home = () => {
  return (
    <>
      <section className={`${Styles.bgSection}`}>
        <div className="customContainer mx-auto px-5">
          <div className="flex desktop:flex-row text-center desktop:text-start flex-col">
            <h1 className="fontH1 text-white font-bold flex-2  w-full laptop:w-625 ">
              Find the <br /> best{" "}
              <span className="text-LightCoral">talent</span>
            </h1>
            <div className="relative flex-1 justify-between before:w-12 before:h-1 before:bg-RaptureBlue before:relative flex flex-col before:tablet:hidden before:desktop:block">
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
          <div className=" flex flex-col gap-14 desktop:gap-0 desktop:flex-row desktop:justify-between">
            <h1 className="text-white max-w-[240px] fontH2 laptop:max-w-md relative  before:w-12 before:h-1 before:bg-LightCoral before:absolute before:-top-[50px]">
              Build & manage distributed teams like no one else.
            </h1>
            <div className="max-w-lg">
              <div className="flex flex-col items-center text-center laptop:text-start laptop:flex-row gap-5 mb-8 laptop:items-start">
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
              <div className="flex flex-col items-center text-center laptop:text-start laptop:flex-row gap-5 mb-8 laptop:items-start">
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
              <div className="flex flex-col items-center text-center laptop:text-start laptop:flex-row gap-5 mb-8 laptop:items-start">
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
      <section className={`${Styles.bgSectionStories}`}>
      <div className="customContainer mx-auto px-5">
        <h1 className="text-white fontH2 max-w-[930px] text-center my-auto mx-auto mb-14">Delivering real results for top companies. Some of our <span className="text-RaptureBlue">success stories.</span></h1>
        <div className="flex flex-col desktop:flex-row gap-12 laptop:items-center desktop:gap-5 ">
          <div className={`relative text-center max-w-[350px]`}>
          <img className={`${Styles.effectImg}`} src={queote} alt="" />
            <p className="fontBody-2 text-white relative"> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
            <h4 className="fontBody-1 text-RaptureBlue pt-6 pb-1">Kady Baker</h4>
            <p className="text-[0.8125rem] font-medium italic text-white">Product Manager at Bookmark</p>
            <img className="w-16 h-16 rounded-full border-2 border-RaptureBlue mx-auto mt-8" src={profile1} alt="" />
          </div>
          <div className={`relative text-center max-w-[350px]`}>
            <img className={`${Styles.effectImg}`} src={queote} alt="" />
            <p className="fontBody-2 text-white relative"> “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
            <h4 className="fontBody-1 text-RaptureBlue pt-6 pb-1">Aiysha Reese</h4>
            <p className="text-[0.8125rem] font-medium italic text-white">Founder of Manage</p>
            <img className="w-16 h-16 rounded-full border-2 border-RaptureBlue mx-auto mt-8" src={profile2} alt="" />
          </div>
          <div className={` relative text-center max-w-[350px]`}>
          <img className={`${Styles.effectImg}`} src={queote} alt="" />
            <p className="fontBody-2 text-white relative"> “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
            <h4 className="fontBody-1 text-RaptureBlue pt-6 pb-1">Arthur Clarke</h4>
            <p className="text-[0.8125rem] font-medium italic text-white">Co-founder of MyPhysio</p>
            <img className="w-16 h-16 rounded-full border-2 border-RaptureBlue mx-auto mt-8" src={profile3} alt="" />
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Home;
