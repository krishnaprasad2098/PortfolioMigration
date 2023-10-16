import React from "react";
import ExperienceData from "../data/ExperienceData";

const ExperienceCard = (props) => {
  return (
    <div>
      <div
        className="xl:max-w-xl h-full flex flex-col gap-1 border-4 border-x-purple-500 border-y-violet-500 rounded-xl px-3"
        key={props.id}
      >
        <img
          src={props.logo}
          alt={props.company}
          className="mix-blend-multiply max-w-[8rem] mx-auto"
        />
        <p className="text-xl font-bold text-center">{props.company}</p>
        <p className="text-lg font-medium text-center">{props.title}</p>

        <p className="text-base font-medium text-center">{props.duration}</p>
        <p className="font-semibold text-justify font-sans">
          {props.description}
        </p>
        <p className="font-bold text-center text-lg flex-grow">
          Technical Skills
        </p>
        <div className="flex gap-3   py-2 flex-wrap justify-stretch ">
          {props.technologies.map((tec, idx) => {
            return (
              <div className="py-1 xl:flex-grow text-center" key={idx}>
                <p className="py-1 border-2 border-blue-500 px-5 text-black font-semibold text-base bg-purple-300 rounded-full">
                  {tec.tech}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
