import Image from "next/image";
import BodyText from "../BodyText";
import Title from "../Title";

export default function AboutSection() {
  return (
    <div id="about" className="relative flex flex-col space-y-10 items-center">
      <h1 className="leading-[60px] text-center text-6xl font-bold text-white md:text-left md:text-[80px] md:leading-[80px]">
        About Me
      </h1>

      <BodyText>
        I am a young enthusiast who is keen on IT and anything about it since my
        first steps to High <br /> School. During the past few years, I gained
        lots of experience in this field due to the strong <br /> desire of
        becoming an expert in my field. I&apos;m pretty swift at{" "}
        <span className="underline decoration-myOrange">
          learning new technologies
        </span>{" "}
        which <br /> has contributed to my adaptive skills, easily adapting to
        new environments and new tech.
        <br />
        “For me,{" "}
        <span className="underline decoration-myOrange">
          frontend development
        </span>{" "}
        is more than coding. It&apos;s a canvas with a blank page and I am{" "}
        <br /> the artist to paint it with colors of coding.{" "}
        <span className="underline decoration-myOrange">
          NOW! WHAT DO YOU WANT ME TO PAINT?
        </span>
        ”.
      </BodyText>

      <div className="flex flex-row flex-wrap justify-center space-x-5">
        <div className=" w-10 md:w-auto">
          <Image
            width={70}
            height={70}
            objectFit="contain"
            alt="javascript logo"
            src="/assets/logos/js.png"
          />
        </div>
        <div className="w-10 md:w-auto">
          <Image
            width={70}
            height={70}
            objectFit="contain"
            alt="react logo"
            src="/assets/logos/react.png"
          />
        </div>
        <div className="w-10 md:w-auto">
          <Image
            width={70}
            height={70}
            objectFit="contain"
            alt="html logo"
            src="/assets/logos/html.png"
          />
        </div>
        <div className="w-10 md:w-auto">
          <Image
            width={70}
            height={70}
            objectFit="contain"
            alt="css logo"
            src="/assets/logos/css.png"
          />
        </div>
        <div className="w-10 md:w-auto">
          <Image
            width={70}
            height={70}
            objectFit="contain"
            alt="firebase logo"
            src="/assets/logos/firebase.png"
          />
        </div>
        <div className="w-10 md:w-auto">
          <Image
            width={70}
            height={70}
            objectFit="contain"
            alt="git logo"
            src="/assets/logos/git.png"
          />
        </div>
        <div className="w-10 md:w-auto">
          <Image
            width={70}
            height={70}
            objectFit="contain"
            alt="tailwindcss logo"
            src="/assets/logos/tailwindcss.png"
          />
        </div>
        <div className="w-10 md:w-auto">
          <Image
            width={70}
            height={70}
            objectFit="contain"
            alt="nextjs logo"
            src="/assets/logos/next.png"
          />
        </div>
      </div>
      {/* absolute circle */}
      <div className="absolute top-20 left-[20%] p-10 blur-2xl bg-pink-500 rounded-full md:blur-3xl md:p-14 md:-top-40"></div>
    </div>
  );
}
