import Image from "next/image";
import BodyText from "../BodyText";
import Title from "../Title";

export default function AboutSection() {
  return (
    <div className="flex flex-col space-y-10 items-center bg-black px-10 py-20 md:space-x-10 md:space-y-0 md:flex-row">
      <div>
        <div className="mb-10">
          <Title>
            <span
              className="text-myYellow bg-clip-text text-transparent
          bg-gradient-to-r from-myYellow to-myGreen"
            >
              About Me
            </span>
          </Title>
        </div>
        <BodyText>
          I am a young enthusiast who is keen on IT and anything about it since
          my first steps to High School. During the past few years, I gained
          lots of experience in this field due to the strong desire of becoming
          an expert in my field. I&apos;m pretty swift at{" "}
          <span className="underline decoration-myGreen">
            learning new technologies
          </span>{" "}
          which has contributed to my adaptive skills, easily adapting to new
          environments and new tech.
          <br></br>“For me,{" "}
          <span className="underline decoration-myYellow">
            frontend development
          </span>{" "}
          is more than coding. It&apos;s a canvas with a blank page and I am the
          artist to paint it with colors of coding.{" "}
          <span className="underline decoration-myYellow">
            NOW! WHAT DO YOU WANT ME TO PAINT?
          </span>
          ”.
        </BodyText>
      </div>
      <div>
        <Image
          width={3500}
          height={3500}
          objectFit="contain"
          src="/assets/frontskills-circle.png"
          alt="skill circle image"
        />
      </div>
    </div>
  );
}
