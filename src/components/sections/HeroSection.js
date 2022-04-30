import Image from "next/image";
import Button from "../Button";
import ContactLinks from "../ContactLinks";

export default function HeroSection() {
  return (
    <div className="flex flex-row justify-center px-6 mt-20 md:mt-40 md:px-16 md:justify-between">
      {/* first part */}
      <div className="flex flex-col space-y-10 ">
        <div
          className={`flex bg-[url('/assets/desmond.png')] bg-cover bg-no-repeat w-48 h-48 rounded-full self-center md:hidden`}
        ></div>
        <p className="block text-myOrange justify-start text-center md:hidden">
          2+ Years of ReactJS <br /> 4+ Years of JS
        </p>

        <h1 className="leading-[60px] text-center text-6xl font-bold text-white md:text-left md:text-8xl md:leading-[80px]">
          Hi, I am <br /> <span className="text-myOrange">Desmond</span> Oben
        </h1>

        <h2 className="text-sm text-center text-white md:text-left">
          &quot;I just want to make beautiful things, even when no one
          cares&quot; - <br></br>
          <span className="underline decoration-myOrange">
            Frontend Engineer.
          </span>{" "}
          Let&apos;s make something{" "}
          <span className="underline decoration-myOrange">React-ive</span>
        </h2>

        <div className="flex flex-col justify-center space-y-5 md:space-y-0 md:justify-start md:flex-row md:space-x-10">
          <Button
            text="Contact Me"
            onClick={() => window.location.replace("#contact")}
            bordered
          />
          <Button
            text="Download CV"
            onClick={() => window.open("/assets/akodesmondoben.pdf")}
            download
          />
          {/* contact links */}
          <div className="self-center">
            <ContactLinks showOnSm />
          </div>
        </div>
      </div>

      <div className="hidden flex-col justify-end space-y-5 md:flex">
        <div
          className={`flex bg-[url('/assets/desmond.png')] px-16 bg-cover bg-no-repeat w-48 h-48 rounded-full self-center`}
        ></div>
        <p className="text-myOrange text-center">
          2+ Years of ReactJS <br /> 4+ Years of JS
        </p>
        <div className="self-center">
          <ContactLinks showOnMd />
        </div>
      </div>

      {/* absolute bobles */}
      <div className="absolute top-20 right-0 p-10 blur-3xl bg-pink-500 rounded-full md:p-20 md:top-10"></div>
      <div className="absolute top-24 left-0 p-10 blur-3xl bg-myOrange rounded-full md:p-16 md:top-32 " />
      <div className=" absolute top-24 left-[50%] p-5 blur-3xl bg-blue-500 rounded-full md:p-16 md:top-[60%] md:block" />
    </div>
  );
}
