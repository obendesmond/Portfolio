import React from "react";
import Button from "./Button";

export default function Project({
  title,
  description,
  imgSrc,
  tags,
  liveLink,
  codeLink,
  bgColor,
  colorTo,
}) {
  return (
    <>
      <div
        className={`bg-[${bgColor}] pt-10 flex flex-col-reverse justify-between items-start md:grid md:grid-cols-2 gap-20 md:pt-52`}
      >
        <div
          className={`hidden bg-[url('/assets/mockups/${imgSrc}')] bg-cover bg-no-repeat shadow-[36px_-20px_66px_-4px_rgba(0,0,0,0.37)] w-full h-[420px] rounded-tr-[40px] md:flex`}
        ></div>

        <div className=" flex flex-col space-y-5 px-12 mt-24 md:mt-0">
          <div className="text-center md:text-left">
            <h1 className="text-white text-2xl font-bold uppercase">{title}</h1>
          </div>
          <p className="text-white text-justify">{description}</p>
          <div
            className={`block bg-[url('/assets/mockups/${imgSrc}')] bg-contain bg-no-repeat  w-full h-[200px] rounded-xl md:hidden`}
          ></div>

          <div className="flex flex-col justify-center space-y-5 md:space-y-0 md:justify-start md:flex-row md:space-x-10">
            <Button text="View Live" bordered />
            <Button text="View Code" />
          </div>
          <div className="flex flex-wrap space-x-3 space-y-3 items-end ">
            {tags?.map((tag, i) => (
              <p
                key={i}
                className="py-1 px-5 text-white rounded-lg bg-transparent border border-white"
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* gradient container divider */}
      <div
        className={`bg-gradient-to-b 
        ${bgColor && `from-[${bgColor}]`} 
        ${colorTo ? `to-[${colorTo}]` : "to-[#00052B]"} 
          w-full h-20`}
      ></div>
    </>
  );
}
