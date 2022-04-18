import Image from "next/image";
import Button from "../Button";
import Title from "../Title";

export default function HeroSection() {
  return (
    <div className="flex bg-myDark flex-col items-center px-10 -mt-20 align-middle pt-40 pb-10 border-b-[20px] border-myBorder md:flex-row">
      {/* first part */}
      <div className="flex flex-col space-y-10 mb-20 md:mb-0 ">
        <Title heroTitle>
          Hi, I&apos;m{" "}
          <span className="text-myYellow hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-myGreen to-myYellow">
            Desmond
          </span>{" "}
          Oben
        </Title>
        <h2 className="text-2xl text-center text-gray-400 md:text-left">
          &quot;I just want to make beautiful things, even when no one
          cares&quot;-
          <span className="underline decoration-myYellow">
            Frontend Engineer.
          </span>{" "}
          Let&apos;s make something{" "}
          <span className="underline decoration-myGreen">React-ive</span>
        </h2>
        <div className="flex flex-row justify-center md:justify-start space-x-10">
          <Button text="Contact Me" />
          <Button text="Download CV" />
        </div>
      </div>
      {/* second part */}
      <div className="hidden md:block">
        <Image
          width={700}
          height={700}
          objectFit="contain"
          src="/assets/young-man.png"
          alt="dboy"
        />
      </div>
    </div>
  );
}
