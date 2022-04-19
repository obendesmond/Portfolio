import BodyText from "../BodyText";
import Skill from "../Skill";
import Title from "../Title";

export default function ContactSection() {
  return (
    <div
      id="contact"
      className="flex flex-col space-y-10 mx-auto bg-myDark border-t-[20px] border-myBorder px-10 py-20 md:space-y-0"
    >
      {/* top title */}
      <div className="mb-10">
        <Title right>
          <span
            className="text-myYellow bg-clip-text text-transparent
          bg-gradient-to-r from-myYellow to-myGreen"
          >
            Contact Me
          </span>
        </Title>
      </div>
    </div>
  );
}
