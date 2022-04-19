import Image from "next/image";
import BodyText from "../BodyText";
import Card from "../Card";
import Skill from "../Skill";
import Title from "../Title";

export default function TestimonialsSection() {
  return (
    <div
      id="education"
      className="flex flex-col space-y-10 mx-auto bg-black border-t-[20px] border-myBorder px-10 py-20 md:space-y-0"
    >
      <div className="mb-10">
        <Title>
          <span
            className="text-myYellow bg-clip-text text-transparent
          bg-gradient-to-r from-myYellow to-myGreen"
          >
            Testimonials
          </span>
        </Title>
      </div>

      <div className="pt-10">
        <a
          href="#more-education"
          className="text-gray-400 font-extrabold text-2xl"
        >
          See More Certs...
        </a>
      </div>
    </div>
  );
}
