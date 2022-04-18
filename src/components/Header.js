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
      <div className="container flex flex-row max-w-2xl sticky top-0 z-50 bg-clip-padding justify-around items-center bg-myDark bg-opacity-80 backdrop-blur-[2px] border-2 border-myYellow border-t-0 mx-auto rounded-b-full md:justify-center">
        <a href="#hero" className="-ml-14">
          <Image
            width={250}
            height={60}
            src="/assets/desmond.png"
            alt="desmond"
            objectFit="contain"
          />
        </a>
        <div className="hidden md:flex flex-row space-x-10 my-auto text-white">
          <a
            href="#about"
            className="hover:underline hover:text-myGreen hover:decoration-myYellow"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:underline hover:text-myGreen hover:decoration-myYellow"
          >
            Skills
          </a>
          <a
            href="#education"
            className="hover:underline hover:text-myGreen hover:decoration-myYellow"
          >
            Education
          </a>
          <a
            href="#portfolio"
            className="hover:underline hover:text-myGreen hover:decoration-myYellow"
          >
            Portfolio
          </a>
        </div>
        <div
          onClick={handleMenuOpen}
          className="cursor-pointer flex md:hidden text-myYellow my-auto"
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
