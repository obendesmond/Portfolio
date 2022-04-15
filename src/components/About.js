import Image from "next/image";
import React from "react";
import Title from "./Title";

export default function About() {
  return (
    <div className="flex flex-col space-y-10 items-center bg-black px-10 py-20 md:space-x-10 md:space-y-0 md:flex-row">
      <div>
        <div className="mb-10">
          <Title>
            <span className="underline decoration-myYellow decoration-2 underline-offset-8">
              About Me
            </span>
          </Title>
        </div>
        <p className="indent-10 md:font-mono text-gray-400 text-xl text-justify md:text-left">
          I am a young enthusiast who is keen on IT and anything about it since
          my first steps to High School. During the past few years, I gained
          lots of experience in this field due to the strong desire of becoming
          an expert in my field. I&apos;m pretty swift at{" "}
          <span className="underline decoration-myGreen">
            learning new technologies
          </span>{" "}
          which has contributed to my adaptive skills, easily adapting to new
          environments and new tech. <br></br>“For me, frontend development is
          more than coding. It&apos;s a canvas with a blank page and I am the
          artist to paint it with colors of coding”.
        </p>
      </div>
      <div>
        <Image
          width={3000}
          height={3000}
          objectFit="contain"
          src="/assets/frontskills-circle.png"
          alt="skill circle image"
        />
      </div>
    </div>
  );
}
