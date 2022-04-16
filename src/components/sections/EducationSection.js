import Image from "next/image";
import BodyText from "../BodyText";
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

      {/* experience  */}
      <div className=" flex flex-col justify-around items-center pt-10 pb-10 space-y-20 lg:space-y-0 lg:flex-row">
        <div className="flex flex-col space-y-10 items-center">
          <div className="-mb-10 h-7 w-7 rounded-full bg-myYellow"></div>
          <div className="text-center leading-2">
            <h1 className="text-xl text-gray-400">2016 - 2020</h1>
            <p className="text-gray-400 text-xl">
              University of Buea. <br></br>BTec. Software Engineering
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-10 items-center">
          <div className="-mb-10 h-7 w-7 rounded-full bg-myYellow"></div>
          <div className="text-center leading-2">
            <h1 className="text-xl text-gray-400">2018 - 2019</h1>
            <p className="text-gray-400 text-xl">
              Internship at. <br></br>GPT (myeazyschool)
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-10 items-center">
          <div className="-mb-10 h-7 w-7 rounded-full bg-myYellow"></div>
          <div className="text-center leading-2">
            <h1 className="text-xl text-gray-400">
              2019 - <span className="text-myGreen">PRESENT</span>
            </h1>
            <p className="text-gray-400 text-xl">
              Freelancer. <br></br>Freelance at Fiverr and Upwork
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Certificate
          imgSrc="REACT-Cert.jpg"
          logos={["react.png", "html.png", "css.png", "git.png"]}
        />
        <Certificate
          imgSrc="REDUX-Cert.jpg"
          logos={[
            "redux-logo.png",
            "react.png",
            "html.png",
            "css.png",
            "git.png",
          ]}
        />
        <Certificate
          imgSrc="MERN-Cert.jpg"
          logos={["Node.png", "react.png", "html.png", "css.png", "git.png"]}
        />
        {/* <Certificate imgSrc="MERN-Cert.jpg" />
        <Certificate imgSrc="REDUX-Cert.jpg" />
        <Certificate imgSrc="HTML-Cert3.jpg" />
        <Certificate imgSrc="JS-Cert.jpg" />
        <Certificate imgSrc="NODE-Cert.jpg" />
        <Certificate imgSrc="RN-Cert.jpg" />
        <Certificate imgSrc="GIT-Cert.jpg" /> */}
      </div>
      <div className="pt-10">
        <a
          href="#more-education"
          className="text-gray-400 font-extrabold text-2xl"
        >
          See More...
        </a>
      </div>
    </div>
  );
}
