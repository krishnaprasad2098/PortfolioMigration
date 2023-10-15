import React from "react";

const ProjectCard = (props) => {
  const { imgname, projecttitle, projectdescription, projectlink, id } = props;
  return (
    <div
      className=" border-4 border-[#fccb06] mx-auto rounded-md   bg-[#222e50] "
      key={id}
    >
      <div className="xl:max-w-xs flex flex-col h-full text-white ">
        <img
          src={imgname}
          alt={imgname}
          className="p-3 rounded-[1rem] object-contain"
        />
        <p className="font-bold text-xl px-3 py-2 text-center">
          {projecttitle}
        </p>
        <p className="font-semibold text-center text-lg text-white px-3 flex-grow ">
          {projectdescription}
        </p>
        <div className="grid place-items-center py-3">
          <button
            type="button"
            className="px-10 py-3 bg-[#edf7f6]  border-4 font-semibold text-lg text-black border-[#fccb06] rounded-md"
          >
            View in Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
