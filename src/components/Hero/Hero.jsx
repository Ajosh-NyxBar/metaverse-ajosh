import React from "react";
import png from "../../assets/hero.png";
import { BiPlayCircle } from "react-icons/bi";

const Hero = () => {
  return (
    <>
      <div
        className="py-12 sm:py-0 dark:bg-black dark:text-white
      overflow-hidden duration-300"
      >
        <div className="container min-h-[700px] flex relative">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6
          place-items-center relative z-10"
          >
            {/* HERO text */}
            <div className="order-2 sm:order-none space-y-5 lg:pr-20">
              <h1 className="text-4xl font-semibold">
                GET READY TO ENJOY{" "}
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-r 
                from-primary to-secondary"
                >
                  VR GAMES IN MY PLATFORM
                </span>
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
                voluptate consequuntur, repellendus fuga impedit vel culpa
                nesciunt eum soluta incidunt cum quam excepturi possimus ipsum
                aperiam, consequatur facilis inventore aut!
              </p>
              <div className="flex gap-6">
                <button className="primary-btn">GET STARTED</button>
                <button className="flex items-center gap-2">
                  {" "}
                  <BiPlayCircle className="text-3xl" />
                  SEE DEMO
                </button>
              </div>
            </div>
            {/* IMG */}
            <div className="order-1 sm:order-none">
              <img src={png} alt="hero" />
            </div>
          </div>

          {/* ANIMATED BLOB */}
          <div
            className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary
    rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
