import React from "react";
import Button from "./Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";

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
  console.log(imgSrc);
  return (
    <>
      <div
        className={`bg-[${bgColor}] pb-10 pt-10 flex flex-col-reverse justify-between items-start md:grid md:grid-cols-2 md:pb-0 gap-20 md:pt-52`}
      >
        <div
          className={`hidden bg-[url('/assets/mockups/obenify.jpg')] bg-cover bg-no-repeat shadow-[36px_-20px_66px_-4px_rgba(0,0,0,0.37)] w-full h-[420px] rounded-tr-[40px] md:flex`}
        ></div>

        <div className=" flex flex-col space-y-5 px-6 mt-24 md:mt-0">
          <div className="text-center md:text-left">
            <h1 className="text-white text-2xl font-bold uppercase">{title}</h1>
          </div>
          <p className="text-white text-justify">{description}</p>
          <div
            className={`block bg-[url('/assets/mockups/obenify.jpg')] bg-contain bg-no-repeat  w-full h-[200px] rounded-xl md:hidden`}
          ></div>

          <div className="flex flex-wrap space-x-3 space-y-3 items-end justify-center md:justify-start">
            {tags?.map((tag, i) => (
              <p
                key={i}
                className="py-1 px-5 text-white rounded-lg bg-transparent border border-white"
              >
                {tag}
              </p>
            ))}
          </div>
          {/* btn */}
          <div className="flex flex-col justify-center space-y-5 md:space-y-0 md:justify-start md:flex-row md:space-x-10">
            <Button
              onClick={() => window.open(liveLink)}
              Icon={VisibilityIcon}
              text="View Live"
              bordered
            />
            <Button
              onClick={() => window.open(codeLink)}
              Icon={GitHubIcon}
              text="View Code"
            />
          </div>
        </div>
      </div>
    </>
  );
}
