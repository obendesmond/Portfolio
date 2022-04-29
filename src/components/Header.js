import React, { useState } from "react";
import Zoom from "@mui/material/Zoom";
import CustomDrawer from "./CustomDrawer";

export default function Header() {
  return (
    <Zoom in>
      <div className="flex flex-row py-2 sticky top-0 z-50 bg-clip-padding justify-around items-center bg-[rgba(0,0,0,.3)] bg-opacity-80 backdrop-blur-[2px] mx-auto md:justify-center md:py-5">
        {/* links on md above */}
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
          AKO DESMOND OBEN
        </div>

        <CustomDrawer />
      </div>
    </Zoom>
  );
}
