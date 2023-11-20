import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-10 py-2 md:flex-row flex-col sm:gap-2">
        <h1 className="text-3xl px-3 md:text-2xl  font-bold py-2 sm:py-0 md:px-0 font-pilowlava">
          Krishna
        </h1>

        <ul className=" gap-6 px-1 items-center justify-center flex-wrap flex sm:flex-row sm:gap-8">
          <li className=" text-xl font-sans">
            <a href="#AboutMe">About</a>
          </li>
          <li className=" text-xl font-sans">
            <a href="#Experience">Experience</a>
          </li>
          <li className=" text-xl font-sans">
            <a href="#Skills">Skills</a>
          </li>
          <li className=" text-xl font-sans">
            <a href="#">Projects</a>
          </li>
          <li className=" text-xl font-sans">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 bg-purple-400 py-2">
        <div className="flex justify-center items-center gap-1">
          <Icon icon="ic:baseline-copyright" />
          <p className="font-bold text-base font-sans text-black">
            All rights reserved.S Krishna Prasad.
          </p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <p className="font-bold text-base font-sans text-black">Made with</p>
          <Icon icon="ri:heart-fill" color="darkred" />
          <p className="font-bold text-base font-sans text-black">By me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
