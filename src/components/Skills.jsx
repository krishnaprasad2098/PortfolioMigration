import React from "react";
import SkillData from "../data/SkillData";
const Skills = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold py-10 text-center ">Skills</h1>
      <div className="grid lg:grid-cols-6 max-w-fit mx-auto gap-10 sm:grid-cols-4 md:grid-cols-5 grid-cols-2">
        {SkillData.map((ele) => {
          return (
            <img
              src={ele.img}
              alt=""
              className="max-h-28 w-auto bg-transparent p-3 rounded-2xl  bg-opacity-40 aspect-square zoom-image  "
              key={ele.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
