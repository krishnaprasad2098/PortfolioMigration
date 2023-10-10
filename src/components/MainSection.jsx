import React from "react";
import AboutMe from "../assets/AboutMe.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
const MainSection = () => {
  return (
    <div className="flex flex-col items-center md:py-12 py-9  ">
      <div
        id="MainSection"
        className="flex md:flex-row items-center justify-center gap-5 md:gap-14 flex-col"
      >
        <img
          src={AboutMe}
          alt="Krishna"
          className="md:max-w-[35%] xl:max-w-md lg:max-w-xs sm:max-w-[30%] max-w-[70%] "
        />
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col gap-1 items-center">
            <p className="text-xl font-semibold">Hello I'm</p>
            <p className="text-5xl md:text-7xl lg:text-8xl font-bold font-miso">
              S Krishna Prasad
            </p>
            <p className="text-3xl">Frontend Developer</p>
          </div>
          <div className="flex md:flex-row items-center gap-4 ">
            <button
              type="button"
              className="px-6 py-3 text-black font-semibold border-2 border-blue-700 rounded-md bg-zinc-100 hover:bg-blue-400 hover:text-white"
            >
              Download CV
            </button>
            <button
              type="button"
              className="px-6 py-3 bg-zinc-100 text-black hover:text-white font-semibold border-2 border-blue-700 rounded-md hover:bg-blue-400"
            >
              Contact Me
            </button>
          </div>
          <div>
            {/* <div className="flex justify-between items-center gap-10">
            <Link to="/" className="text-5xl">
              <Icon icon="devicon:linkedin" />
            </Link>
            <Link to="/" className="text-5xl">
              <Icon icon="icon-park:github" />
            </Link>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
