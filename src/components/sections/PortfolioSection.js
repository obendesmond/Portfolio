import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import Title from "../Title";
import Button from "../Button";
import CustomTooltip from "../CustomTooltip";

export default function PortfolioSection() {
  return (
    <div className="flex flex-col mx-auto bg-myDark border-t-[20px] border-myBorder px-10 ">
      {/* top title */}
      <div className="mt-10 mb-10">
        <Title right>
          <span
            className="text-myYellow bg-clip-text text-transparent
          bg-gradient-to-r from-myYellow to-myGreen"
          >
            Portfolio
          </span>
        </Title>
      </div>

      {/* portfolio designs */}
      <div>
        <hr className="my-10" />
        <div className="flex flex-col-reverse justify-between items-center md:grid md:grid-cols-2 gap-20">
          <div className="hidden md:flex justify-center">
            <Image
              width={500}
              height={500}
              objectFit="contain"
              src="/assets/mockups/desmozon_mac_phone_updated.png"
              alt="desmozon"
            />
          </div>

          <div className=" flex flex-col space-y-5 mt-24 md:mt-0">
            <div className="text-center md:text-left">
              <h1 className="text-white text-2xl font-bold uppercase">
                {/* <hr className="md:hidden" /> */}
                Desmozon App
                {/* <hr className="md:hidden" /> */}
              </h1>
            </div>
            <p className="text-gray-400 text-xl text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              officiis, voluptatibus in sunt sapiente eaque aperiam debitis illo
              itaque saepe facilis ducimus, quod nam similique esse distinctio
              et! Dolores, minus.
            </p>
            <div className="flex justify-center md:hidden">
              <Image
                width={500}
                height={500}
                objectFit="contain"
                src="/assets/mockups/desmozon_mac_phone_updated.png"
                alt="desmozon"
              />
            </div>

            <div className="flex flex-row justify-center space-x-10 md:justify-start">
              <CustomTooltip title="See live webapp">
                <Button text="View Live" Icon={VisibilityIcon} />
              </CustomTooltip>
              <Button text="View Code" Icon={GitHubIcon} />
            </div>
            <div className="flex flex-row space-x-10 justify-center md:justify-start">
              <span>
                <Image
                  src="/assets/redux-logo.png"
                  height={30}
                  width={30}
                  objectFit="contain"
                  alt="logo name here"
                />
              </span>
              <span>
                <Image
                  src="/assets/react.png"
                  height={30}
                  width={30}
                  objectFit="contain"
                  alt="logo name here"
                />
              </span>
              <span>
                <Image
                  src="/assets/html.png"
                  height={30}
                  width={30}
                  objectFit="contain"
                  alt="logo name here"
                />
              </span>
              <span>
                <Image
                  src="/assets/css.png"
                  height={30}
                  width={30}
                  objectFit="contain"
                  alt="logo name here"
                />
              </span>
              <span>
                <Image
                  src="/assets/git.png"
                  height={30}
                  width={30}
                  objectFit="contain"
                  alt="logo name here"
                />
              </span>
            </div>
          </div>
        </div>
        <hr className="my-10" />
        <div className="flex flex-col-reverse justify-between items-center md:grid md:grid-cols-2 gap-20">
          <div className="hidden md:flex justify-center">
            <Image
              width={500}
              height={500}
              objectFit="contain"
              src="/assets/mockups/desmozon_mac_phone_updated.png"
              alt="desmozon"
            />
          </div>

          <div className=" flex flex-col space-y-5 mt-24 md:mt-0">
            <div className="text-center md:text-left">
              <h1 className="text-white text-2xl font-bold uppercase">
                {/* <hr className="md:hidden" /> */}
                Desmozon App
                {/* <hr className="md:hidden" /> */}
              </h1>
            </div>
            <p className="text-gray-400 text-xl text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              officiis, voluptatibus in sunt sapiente eaque aperiam debitis illo
              itaque saepe facilis ducimus, quod nam similique esse distinctio
              et! Dolores, minus.
            </p>
            <div className="flex justify-center md:hidden">
              <Image
                width={500}
                height={500}
                objectFit="contain"
                src="/assets/mockups/desmozon_mac_phone_updated.png"
                alt="desmozon"
              />
            </div>

            <div className="flex flex-row justify-center space-x-10 md:justify-start">
              <CustomTooltip title="See live webapp">
                <Button text="View Live" Icon={VisibilityIcon} />
              </CustomTooltip>
              <Button text="View Code" Icon={GitHubIcon} />
            </div>
            <div className="flex flex-row space-x-10 justify-center md:justify-start">
              <span>
                <Image
                  src="/assets/redux-logo.png"
                  height={30}
                  width={30}
                  objectFit="contain"
                  alt="logo name here"
                />
              </span>
              <span>
                <Image
                  src="/assets/react.png"
                  height={30}
                  width={30}
                  objectFit="contain"
                  alt="logo name here"
                />
              </span>
              <span>
                <Image
                  src="/assets/html.png"
                  height={30}
                  width={30}
                  objectFit="contain"
                  alt="logo name here"
                />
              </span>
              <span>
                <Image
                  src="/assets/css.png"
                  height={30}
                  width={30}
                  objectFit="contain"
                  alt="logo name here"
                />
              </span>
              <span>
                <Image
                  src="/assets/git.png"
                  height={30}
                  width={30}
                  objectFit="contain"
                  alt="logo name here"
                />
              </span>
            </div>
          </div>
        </div>
        <hr className="my-10" />
        <div className="flex flex-col-reverse justify-between items-center md:grid md:grid-cols-2 gap-20">
          <div className="hidden md:flex justify-center">
            <Image
              width={500}
              height={500}
              objectFit="contain"
              src="/assets/mockups/desmozon_mac_phone_updated.png"
              alt="desmozon"
            />
          </div>

          <div className=" flex flex-col space-y-5 mt-24 md:mt-0">
            <div className="text-center md:text-left">
              <h1 className="text-white text-2xl font-bold uppercase">
                {/* <hr className="md:hidden" /> */}
                Desmozon App
                {/* <hr className="md:hidden" /> */}
              </h1>
            </div>
            <p className="text-gray-400 text-xl text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              officiis, voluptatibus in sunt sapiente eaque aperiam debitis illo
              itaque saepe facilis ducimus, quod nam similique esse distinctio
              et! Dolores, minus.
            </p>
            <div className="flex justify-center md:hidden">
              <Image
                width={500}
                height={500}
                objectFit="contain"
                src="/assets/mockups/desmozon_mac_phone_updated.png"
                alt="desmozon"
              />
            </div>

            <div className="flex flex-row justify-center space-x-10 md:justify-start">
              <CustomTooltip title="See live webapp">
                <Button text="View Live" Icon={VisibilityIcon} />
              </CustomTooltip>
              <Button text="View Code" Icon={GitHubIcon} />
            </div>
            <div className="flex flex-row space-x-10 justify-center md:justify-start">
              <span>
                <Image
                  src="/assets/redux-logo.png"
                  height={30}
                  width={30}
                  objectFit="contain"
                  alt="logo name here"
                />
              </span>
              <span>
                <Image
                  src="/assets/react.png"
                  height={30}
                  width={30}
                  objectFit="contain"
                  alt="logo name here"
                />
              </span>
              <span>
                <Image
                  src="/assets/html.png"
                  height={30}
                  width={30}
                  objectFit="contain"
                  alt="logo name here"
                />
              </span>
              <span>
                <Image
                  src="/assets/css.png"
                  height={30}
                  width={30}
                  objectFit="contain"
                  alt="logo name here"
                />
              </span>
              <span>
                <Image
                  src="/assets/git.png"
                  height={30}
                  width={30}
                  objectFit="contain"
                  alt="logo name here"
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <a
          href="#more-education"
          className="text-gray-400 font-extrabold text-2xl"
        >
          See More...
        </a>
      </div>
    </div>
  );
}
