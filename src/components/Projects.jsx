import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectData from "../data/ProjectData";
import Ethnic from "../assets/Ethnic.avif";

const Projects = () => {
  return (
    <div>
      <div className="gap-2 grid sm:items-stretch md:grid-cols-2 xl:grid-cols-3 sm:gap-5 md:gap-3 sm:grid-cols-2 grid-cols-1 xl:max-w-max xl:mx-auto px-4 xl:gap-16">
        {ProjectData.map((project, id) => {
          return (
            <ProjectCard
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
