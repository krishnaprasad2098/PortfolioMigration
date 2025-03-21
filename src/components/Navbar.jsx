import { useState } from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNavbar = () => {
    setNav(!nav);
  };

  return (
    <div className="flex-col md:top-0 md:left-0 items-end md:flex md:flex-row md:justify-between md:px-10 py-6">
      <h1 className="text-3xl px-3 md:text-2xl font-bold sm:py-0 md:px-0 font-pilowlava">
        Krishna
      </h1>
      <div
        className={
          nav
            ? "hidden md:flex md:flex-row items-center gap-8 md:text-xl"
            : "font-semibold items-center flex flex-col sm:py-0 py-12 text-xl"
        }
      >
        <ul className="flex-col gap-4 flex md:flex-row md:gap-8">
          <li
            className="text-xl  rounded-md px-4 py-1 font-sans"
            onClick={handleNavbar}
          >
            <a href="#AboutMe">About</a>
          </li>
          <li
            className="text-xl rounded-md px-4 py-1 font-sans"
            onClick={handleNavbar}
          >
            <a href="#Experience">Experience</a>
          </li>
          <li
            className="text-xl rounded-md px-4 py-1 font-sans"
            onClick={handleNavbar}
          >
            <a href="#Skills">Skills</a>
          </li>
          <li
            className="text-xl rounded-md px-4 py-1 font-sans"
            onClick={handleNavbar}
          >
            <a href="#Projects">Projects</a>
          </li>
          <li
            className="text-xl rounded-md px-2 py-0.5 font-sans"
            onClick={handleNavbar}
          >
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
      <button
        onClick={handleNavbar}
        className="text-4xl absolute top-6 right-4 md:hidden"
      >
        {nav ? <Icon icon="ci:hamburger-lg" /> : <Icon icon="ep:close-bold" />}
      </button>
    </div>
  );
};

export default Navbar;
