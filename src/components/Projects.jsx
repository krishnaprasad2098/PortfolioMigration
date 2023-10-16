import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectData from "../data/ProjectData";

const Projects = () => {
  return (
    <div className="py-10">
      <h1 className="text-5xl font-bold py-10 text-center ">Projects</h1>
      <div className="gap-2 grid sm:items-stretch md:grid-cols-2 xl:grid-cols-3 sm:gap-5 md:gap-3 sm:grid-cols-2 grid-cols-1 xl:max-w-max xl:mx-auto px-4 xl:gap-16">
        {ProjectData.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              imgname={project.imgname}
              projecttitle={project.projecttitle}
              projectdescription={project.projectdescription}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
