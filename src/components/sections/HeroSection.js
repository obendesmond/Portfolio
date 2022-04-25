import Image from "next/image";
import Button from "../Button";
import Title from "../Title";

export default function HeroSection() {
  return (
    <div id="hero" className="">
      {/* first part */}
      <div className="flex flex-col space-y-10 ">
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

        <div className="flex flex-row justify-center md:justify-start space-x-10">
          <a href="#contact">
            <Button text="Contact Me" bordered />
          </a>
          <Button text="Download CV" />
        </div>
      </div>

      {/* absolute bobles */}
      <div className="absolute top-20 right-0 p-10 blur-3xl bg-myGreen rounded-full md:p-20 md:top-10"></div>
      <div className="absolute top-24 left-0 p-10 blur-3xl bg-myOrange rounded-full md:p-16 md:top-32 " />
      <div className=" absolute top-24 left-[50%] p-5 blur-3xl bg-blue-500 rounded-full md:p-16 md:top-[60%] md:block" />
    </div>
  );
}
