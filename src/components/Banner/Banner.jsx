import React from "react";
import banner from "../../assets/banner1.png";
import { BiPlayCircle } from "react-icons/bi";

const Banner = () => {
  return (
    <div className="py-12 sm:py-0 relative">
      <div className="container min-h-[620px] flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {/* IMAGE */}
          <div>
            <img src={banner} alt="banner" className="w-full max-w-[400px]" />
          </div>
          {/* TEXT */}
          <div className="space-y-5 lg:pr-20 relative">
            <div className="relative z-10 space-y-5">
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
            {/* BACKGROUND */}
            <div
              className="h-[300px] w-[300px] bg-gradient-to-r from-primary
            to-secondary rounded-full absolute bottom-[-200px] opacity-50 left-[300px] blur-3xl"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
