import Image from "next/image";

export default function componentName() {
  return (
    <div className="container flex flex-row max-w-2xl sticky top-0 z-50 bg-opacity-90 bg-clip-padding justify-center bg-myDark align-middle border-2 backdrop-blur-sm border-myYellow border-t-0 mx-auto rounded-b-full">
      <Image
        width={250}
        height={60}
        src="/assets/desmond.png"
        alt="desmond"
        experienceexperience
        objectFit="contain"
      />
      <div className="hidden md:flex flex-row space-x-10 my-auto text-white">
        <a
          href="#about"
          className="hover:underline hover:text-myGreen hover:decoration-myYellow"
        >
          About
        </a>
        <a
          href="#skills"
          className="hover:underline hover:text-myGreen hover:decoration-myYellow"
        >
          Skills
        </a>
        <a
          href="#education"
          className="hover:underline hover:text-myGreen hover:decoration-myYellow"
        >
          Education
        </a>
        <a
          href="#portfolio"
          className="hover:underline hover:text-myGreen hover:decoration-myYellow"
        >
          Portfolio
        </a>
      </div>
      <div className="flex md:hidden text-myYellow my-auto">MENU</div>
    </div>
  );
}
