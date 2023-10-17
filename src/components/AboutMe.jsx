import React from "react";
import AboutMePic from "../assets/AboutMe.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const AboutMe = () => {
  return (
    <div className="py-6 ">
      <h1 className="text-5xl font-semibold text-center py-7">About Me</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 ">
        <img
          src={AboutMePic}
          alt="developer-illustration"
          className="md:max-w-[25%] xl:max-w-md lg:max-w-xs sm:max-w-[50%] max-w-[70%]"
        />
        <div className="flex flex-col gap-4">
          <p className="lg:max-w-xl md:max-w-md font-semibold px-2 sm:px-0 xl:max-w-2xl lg:text-xl font-sans lg:leading-10">
            I am Front End Developer having experience in ReactJS, NuxtJS,
            Tailwind CSS, and Typescript. With a keen eye for detail and a
            passion for creating engaging websites and optimized visually
            stunning designs, I prioritize seamless user experiences that drive
            business growth. I enjoy collaborating with clients to bring their
            ideas to life and staying up-to-date with the latest industry trends
            to deliver reliable and future-proof solutions.
          </p>

          <div className="flex justify-start py-4 items-end gap-10 md:px-0 px-2">
            <Link
              to="https://www.linkedin.com/in/s-krishna-prasad-66a8a1249"
              target="_blank"
              className="text-3xl md:text-5xl"
            >
              <Icon icon="logos:linkedin" />
            </Link>
            <Link to="/" className="text-3xl md:text-5xl">
              <Icon icon="logos:instagram" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
