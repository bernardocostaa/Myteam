import React from 'react'
import Styles from "./css/About.module.css";
import DirectorsCard from './DirectorsCard';

const About = () => {
  return (
    <>
      <section className={`${Styles.bgSection}`}>
        <div className="customContainer mx-auto px-5">
        <div className="flex desktop:flex-row text-center items-center desktop:items-start desktop:text-start flex-col">
            <h1 className="fontH1Small text-white font-bold flex-2 w-full laptop:w-[350px]">
            About
            </h1>
            <div className="relative flex-1 justify-between before:w-12 before:h-1 before:bg-LightCoral before:relative flex flex-col before:tablet:hidden before:desktop:block">
              <p className="fontBody-1 text-white  laptop:max-w-[730px] mt-4">
              We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`${Styles.bgSectionDirectors}`}>
      <h1 className="text-white fontH2 max-w-[930px] text-center my-auto mx-auto mb-14">Meet the directors</h1>
      <DirectorsCard />
      </section>
    </>
  )
}

export default About