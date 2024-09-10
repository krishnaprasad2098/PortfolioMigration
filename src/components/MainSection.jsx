import MainSectionPic from "../assets/MainSectionPic.png";
// import KrishnaPrasadResume from "../assets/krishnaprasadResume.pdf";
import KrishnaPrasadResume from "../../src/assets/krishnaprasadResume.pdf";

const MainSection = () => {
  return (
    <div className="flex flex-col items-center md:py-12 py-9  ">
      <div
        id="MainSection"
        className="flex md:flex-row items-center justify-center gap-5 md:gap-14 xl:gap-20 flex-col"
      >
        <div className="flex flex-col justify-center items-center gap-5 lg:gap-8">
          <div className="flex flex-col gap-3 items-center">
            <p className="text-xl font-semibold">Hello I&apos;m</p>
            <p className="text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-bold ">
              S Krishna Prasad
            </p>
            <p className="text-3xl">Frontend Developer</p>
          </div>
          <div className="flex md:flex-row items-center gap-4 ">
            <button
              type="button"
              className="px-6 py-3 text-black font-semibold border-2 border-blue-700 rounded-md bg-zinc-100 hover:bg-blue-400 hover:text-white"
            >
              <a
                href={KrishnaPrasadResume}
                download={KrishnaPrasadResume.pdf}
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
            </button>

            <button
              type="button"
              className="px-6 py-3 bg-zinc-100 text-black hover:text-white font-semibold border-2 border-blue-700 rounded-md hover:bg-blue-400"
            >
              <a href="#Contact">Contact Me</a>
            </button>
          </div>
          <div></div>
        </div>
        <img
          src={MainSectionPic}
          alt="Krishna"
          className="md:max-w-[35%] xl:max-w-xs lg:max-w-xs sm:max-w-[40%] max-w-[70%] "
        />
      </div>
    </div>
  );
};

export default MainSection;
