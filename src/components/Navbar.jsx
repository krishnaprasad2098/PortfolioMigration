import React, { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNavbar = () => {
    setNav(true);
  };
  return (
    <div className="sm:flex sm:flex-row justify-around items-center py-6">
      <h1 className="text-5xl font-sans font-bold">Krishna</h1>
      <div>
        <ul className="sm:flex sm:flex-row items-center gap-8 sm:text-2xl font">
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
