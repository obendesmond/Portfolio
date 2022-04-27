import React, { useState } from "react";
import Image from "next/image";
import Zoom from "@mui/material/Zoom";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Zoom in>
      <div className="flex flex-row py-2 sticky top-0 z-50 bg-clip-padding justify-around items-center bg-[rgba(0,0,0,.3)] bg-opacity-80 backdrop-blur-[2px] mx-auto md:justify-center md:py-5">
        {/* links */}
        <div className="hidden md:flex flex-row space-x-10 my-auto text-white">
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
        </div>
        <div
          onClick={handleMenuOpen}
          className="cursor-pointer flex outline-none text-myYellow my-auto md:hidden"
        >
          {menuOpen ? (
            <MenuOpenIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </div>
      </div>
    </Zoom>
  );
}
