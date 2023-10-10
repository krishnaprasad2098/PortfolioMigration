import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNavbar = () => {
    setNav(!nav);
  };
  return (
    <div className="flex-col items-end md:flex md:flex-row md:justify-around  py-6">
      <h1 className="text-3xl px-3 md:text-2xl  font-bold py-2 sm:py-0 md:px-0 font-pilowlava">
        Krishna
      </h1>
      <div
        className={
          nav
            ? "hidden md:flex md:flex-row items-center gap-8 md:text-xl "
            : "font-semibold items-center flex flex-col py-6 text-xl "
        }
      >
        <ul className="flex-col gap-6 flex md:flex-row md:gap-8">
          <li className="">About</li>
          <li className="">Experience</li>
          <li className="">Projects</li>
          <li className="">Contact</li>
        </ul>
      </div>
      <button
        onClick={handleNavbar}
        className="text-4xl absolute top-10 right-4 md:hidden"
      >
        {nav ? (
          <Icon icon="fluent-mdl2:global-nav-button-active" />
        ) : (
          <Icon icon="ep:close-bold" />
        )}
      </button>
    </div>
  );
};

export default Navbar;
