import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import Title from "../Title";
import Button from "../Button";
import CustomTooltip from "../CustomTooltip";

export default function PortfolioSection() {
  return (
    <div
      id="portfolio"
      className="relative flex flex-col mx-auto bg-[#00052B] mt-40 py-20"
    >
      {/* gradient container */}
      <div className="absolute top-0 bg-gradient-to-b from-myDark to-[#00052B] w-full h-20"></div>

      <h1 className="leading-[60px] text-center text-6xl font-bold text-white md:text-[80px] md:leading-[80px]">
        Portfolio
      </h1>

      {/* projects */}

      <div className="pt-20 flex flex-col-reverse justify-between items-start md:grid md:grid-cols-2 gap-20 md:pt-52">
        <div className="hidden bg-[url('/assets/mockups/desmozon_mac.jpg')] bg-cover bg-no-repeat shadow-[36px_-20px_66px_-4px_rgba(0,0,0,0.37)] w-full h-[420px] rounded-tr-[40px] md:flex"></div>

        <div className=" flex flex-col space-y-5 px-12 mt-24 md:mt-0">
          <div className="text-center md:text-left">
            <h1 className="text-white text-2xl font-bold uppercase">
              Desmozon App
            </h1>
          </div>
          <p className="text-white text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            officiis, voluptatibus in sunt sapiente eaque aperiam debitis illo
            itaque saepe facilis ducimus, quod nam similique esse distinctio et!
            Dolores, minus.
          </p>
          <div className="block bg-[url('/assets/mockups/desmozon_mac.jpg')] bg-contain bg-no-repeat  w-full h-[200px] rounded-xl md:hidden"></div>

          <div className="flex flex-col justify-center space-y-5 md:space-y-0 md:justify-start md:flex-row md:space-x-10">
            <Button text="View Live" bordered />
            <Button text="View Code" />
          </div>
          <div className="flex flex-wrap space-x-3 space-y-3 items-end ">
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              HTML
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              CSS
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              REACT
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              NEXT
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              HTML
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              HTML
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              HTML
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              HTML
            </p>
          </div>
        </div>
      </div>

      {/* gradient container divider */}
      <div className="bg-gradient-to-b from-[#00052B] to-[#320721] w-full h-20"></div>

      <div className="bg-[#320721] pt-20 flex flex-col-reverse justify-between items-start md:grid md:grid-cols-2 gap-20 md:pt-52">
        <div className="hidden bg-[url('/assets/mockups/obenify.jpg')] bg-cover bg-no-repeat shadow-[36px_-20px_66px_-4px_rgba(0,0,0,0.37)] w-full h-[420px] rounded-tr-[40px] md:flex"></div>

        <div className=" flex flex-col space-y-5 px-12 mt-24 md:mt-0">
          <div className="text-center md:text-left">
            <h1 className="text-white text-2xl font-bold uppercase">
              OBENIFY CLOUD HOSTING UI
            </h1>
          </div>
          <p className="text-white text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            officiis, voluptatibus in sunt sapiente eaque aperiam debitis illo
            itaque saepe facilis ducimus, quod nam similique esse distinctio et!
            Dolores, minus.
          </p>
          <div className="block bg-[url('/assets/mockups/obenify.jpg')] bg-contain bg-no-repeat  w-full h-[200px] rounded-xl md:hidden"></div>

          <div className="flex flex-col justify-center space-y-5 md:space-y-0 md:justify-start md:flex-row md:space-x-10">
            <Button text="View Live" bordered />
            <Button text="View Code" />
          </div>
          <div className="flex flex-wrap space-x-3 space-y-3 items-end ">
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              HTML
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              CSS
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              REACT
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              NEXT
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              HTML
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              HTML
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              HTML
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              HTML
            </p>
          </div>
        </div>
      </div>

      {/* load more btn */}
      <div className="text-center">
        <a href="#more-education" className="text-white">
          Load More Work...
        </a>
      </div>
    </div>
  );
}
