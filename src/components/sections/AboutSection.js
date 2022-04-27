import { Javascript } from "@mui/icons-material";
import Image from "next/image";
import BodyText from "../BodyText";
import Title from "../Title";

export default function AboutSection() {
  const oneLogo = (alt, link) => (
    <div className=" w-10 md:w-auto py-">
      <Image
        width={70}
        height={70}
        objectFit="contain"
        alt={alt}
        src={`/assets/logos/${link}`}
      />
    </div>
  );

  return (
    <div
      id="about"
      className="relative mt-40 flex flex-col space-y-10 items-center px-16"
    >
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

      <div className="flex flex-col">
        <div className="flex flex-row justify-center space-x-5">
          {oneLogo("javascript logo", "js.png")}
          {oneLogo("react logo", "react.png")}
          {oneLogo("html logo", "html.png")}
          {oneLogo("css logo", "css.png")}
          <br />
          {oneLogo("firebase logo", "firebase.png")}
          {oneLogo("git logo", "git.png")}
        </div>
        <div className="flex flex-row justify-center space-x-5">
          {oneLogo("tailwindcss logo", "tailwindcss.png")}
          {oneLogo("nextjs logo", "next.png")}
          {oneLogo("redux logo", "redux.png")}
          {oneLogo("mui logo", "mui.png")}
        </div>
      </div>

      {/* absolute blur circle */}
      <div className="absolute top-20 left-[20%] p-10 blur-2xl bg-pink-500 rounded-full md:blur-3xl md:p-14"></div>
    </div>
  );
}
