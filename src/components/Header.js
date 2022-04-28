import React, { useState } from "react";
import Zoom from "@mui/material/Zoom";

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
          {/* TODDO: add blog later*/}
          {/* <a href="#blog">Blog</a> */}
        </div>

        <div className="flex flex-row text-xl text-white font-bold items-end md:hidden">
          {/* <div className="block border-8 border-myOrange rounded-full w-10 h-10 md:hidden"></div> */}
          AKO DESMOND OBEN
        </div>
        <div
          onClick={handleMenuOpen}
          className="cursor-pointer flex outline-none text-myOrange my-auto md:hidden"
        >
          {menuOpen ? (
            <div className="block border-8 border-myOrange rounded-xl w-10 h-10 md:hidden"></div>
          ) : (
            <div className="block border-8 border-myOrange rounded-full w-10 h-10 md:hidden"></div>
          )}
        </div>
      </div>
    </Zoom>
  );
}
