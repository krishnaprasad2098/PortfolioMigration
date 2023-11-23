import React from "react";
import ExperienceData from "../data/ExperienceData";

const ExperienceCard = (props) => {
  return (
    <div>
      <div
        className="xl:max-w-xl h-full flex flex-col gap-1 border-4 border-x-purple-500 border-y-violet-500 rounded-xl px-3"
        key={props.id}
      >
        <div className="pt-5 flex items-center justify-center flex-grow">
          <img
            src={props.logo}
            alt={props.company}
            className=" max-w-[8rem] m-auto object-center mix-blend-multiply "
          />
        </div>
        <p className="text-xl font-bold text-center">{props.company}</p>
        <p className="text-lg font-normal text-center">{props.title}</p>

        <p className="text-base font-medium text-center">{props.duration}</p>
        <p className="font-normal text-justify font-sans ">
          {props.description}
        </p>
        <p className="font-bold text-center text-lg ">Technical Skills</p>
        <div className="flex gap-3 py-3 flex-wrap sm:justify-stretch  justify-center ">
          {props.technologies.map((tec, idx) => {
            return (
              <div className="py-1 xl:flex-grow text-center" key={idx}>
                <p className="py-1 border-2 border-blue-300 px-5 text-[#00317a] font-semibold text-base bg-[#eaf1fb] rounded-full max-w-fit">
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
