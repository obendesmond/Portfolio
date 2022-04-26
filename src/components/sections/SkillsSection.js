import BodyText from "../BodyText";
import Skill from "../Skill";
import Title from "../Title";

export default function SkillsSection() {
  return (
    <div
      id="skills"
      className="relative flex flex-col space-y-10 md:items-center md:flex-row md:space-x-14"
    >
      <div className="flex-[0.6] flex-col space-y-10">
        {/* top title */}
        <h1 className="leading-[60px] text-center text-6xl font-bold text-white md:text-left md:text-[80px] md:leading-[80px]">
          My Skills
        </h1>

        {/* skills text */}
        <p className="text-sm text-white text-justify leading-6 md:text-left">
          Frontend Engineer believing in the power of web and mobile app
          development. Focused on{" "}
          <span className="underline decoration-myOrange">
            frontend development
          </span>{" "}
          but yet building skills on{" "}
          <span className="underline decoration-myOrange">
            backend(NodeJS) and mobile app(React Native) development
          </span>
          . Experienced in working with the MVC architecture and the{" "}
          <span className="underline decoration-myOrange">Agile</span> way of
          development. I&apos;m keen on exploring new technologies and I always
          try to stay up-to-minute. Apart from these, I have other skills, such
          as{" "}
          <span className="underline decoration-myOrange">Communication</span>,
          working in a team and learning new skills. I fluently use{" "}
          <span className="underline decoration-myOrange">Adobe Photoshop</span>{" "}
          and <span className="underline decoration-myOrange">Illustrator</span>{" "}
          to create some web and mobile assets, Adobe XD for designing the
          websites before coding them. I&apos;m ready and willing to{" "}
          <span className="underline decoration-myOrange">join a team</span>.
        </p>
      </div>

      <div className="flex-[0.4] flex-col space-y-3">
        <Skill title="HTML/CSS" percentage={98} />
        <Skill title="Js" percentage={95} />
        <Skill title="ReactJS" percentage={95} />
        <Skill title="Redux" percentage={95} />
        <Skill title="NextJS" percentage={90} />
        <Skill title="Firebase" percentage={85} />
        <Skill title="Git" percentage={85} />
      </div>

      {/* absolute circle */}
      <div className="absolute bottom-0 left-0 p-10 blur-2xl bg-blue-500 rounded-full md:blur-3xl md:p-14"></div>
      <div className="absolute top-0 right-0 p-10 blur-2xl bg-myOrange rounded-full md:blur-3xl md:p-14"></div>
    </div>
  );
}
