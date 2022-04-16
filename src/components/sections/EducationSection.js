import Image from "next/image";
import Certificate from "../Certificate";
import Skill from "../Skill";
import Title from "../Title";

export default function EducationSection() {
  return (
    <div className="flex flex-col space-y-10 mx-auto bg-black border-t-[20px] border-myBorder px-10 py-20 md:space-y-0">
      <div className="mb-10">
        <Title>
          <span
            className="text-myYellow bg-clip-text text-transparent
          bg-gradient-to-r from-myYellow to-myGreen"
          >
            Education
          </span>
        </Title>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Certificate imgSrc="REACT-Cert.jpg" />
        <Certificate imgSrc="MERN-Cert.jpg" />
        <Certificate imgSrc="REDUX-Cert.jpg" />
        <Certificate imgSrc="HTML-Cert3.jpg" />
        <Certificate imgSrc="JS-Cert.jpg" />
        <Certificate imgSrc="NODE-Cert.jpg" />
        <Certificate imgSrc="RN-Cert.jpg" />
        <Certificate imgSrc="GIT-Cert.jpg" />
      </div>
    </div>
  );
}
