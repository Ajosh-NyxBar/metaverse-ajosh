import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const featuresData = [
  {
    name: "Captivating Videos",
    icon: (
      <FaCameraRetro
        className="text-5xl text-primary group-hover:text-black 
            duration-300"
      />
    ),
    link: "#",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, recusandae?",
    aosDelay: "0",
  },
  {
    name: "Safety First",
    icon: (
      <GiNotebook
        className="text-5xl text-primary group-hover:text-black 
            duration-300"
      />
    ),
    link: "#",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, recusandae?",
    aosDelay: "0",
  },
  {
    name: "Experience",
    icon: (
      <SlNote
        className="text-5xl text-primary group-hover:text-black 
            duration-300"
      />
    ),
    link: "#",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, recusandae?",
    aosDelay: "0",
  },
];
const Features = () => {
  return (
    <>
      <div className="container py-14 sm:min-h-[600px]">
        <div>
          <h1 className="text-3xl font-semibold text-center sm:text-4xl mb-12">
            Why Choose Us
          </h1>
          {/* Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-white
              dark:bg-dark hover:bg-gradient-to-r from-primary to-secondary 
              hover:shadow-[0_0_40px_#007cfff0] dark:text-white dark:hover:text-black 
              rounded-lg duration-300 border border-primary"
              >
                <div className="grid place-items-center"> {feature.icon} </div>
                <h1 className="text-2xl">
                  {feature.name}
                </h1>
                <p>{feature.desc}</p>
                <a
                  className="inline-block text-lg
                font-semibold py-3 text-primary group-hover:text-black duration-300"
                  href={feature.link}
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
