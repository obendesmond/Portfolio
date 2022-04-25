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
      <div className="-mb-96 container flex flex-row max-w-2xl py-2 sticky top-0 z-50 bg-clip-padding justify-around items-center rounded-xl bg-myDark bg-opacity-80 backdrop-blur-[2px] mx-auto md:justify-center md:mt-16">
        {/* <a href="#hero" className="-ml-14 outline-none">
          <Image
            width={250}
            height={60}
            src="/assets/desmond.png"
            alt="desmond"
            objectFit="contain"
          />
        </a> */}
        <div className="hidden md:flex flex-row space-x-10 my-auto text-white">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#portfolio">Portfolio</a>
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
