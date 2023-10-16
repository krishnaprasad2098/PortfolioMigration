import React from "react";
import ExperienceData from "../data/ExperienceData";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="py-10">
      <h1 className="text-5xl font-bold py-10 text-center">Experience</h1>
      <div className="grid md:grid-cols-2 px-3 md:max-w-fit grid-cols-1 xl:gap-14 mx-auto gap-3">
        {ExperienceData.map((exe) => {
          return (
            <ExperienceCard
              key={exe.id}
              logo={exe.logo}
              description={exe.description}
              company={exe.company}
              duration={exe.duration}
              technologies={exe.technologies}
              title={exe.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
