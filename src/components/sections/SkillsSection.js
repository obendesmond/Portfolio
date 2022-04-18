import BodyText from "../BodyText";
import Skill from "../Skill";
import Title from "../Title";

export default function SkillsSection() {
  return (
    <div
      id="skills"
      className="flex flex-col space-y-10 mx-auto bg-myDark border-t-[20px] border-myBorder px-10 py-20 md:space-y-0"
    >
      {/* top title */}
      <div className="mb-10">
        <Title right>
          <span
            className="text-myYellow bg-clip-text text-transparent
          bg-gradient-to-r from-myYellow to-myGreen"
          >
            My Skills
          </span>
        </Title>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <Skill title="ReactJS" percentage={95} />
        <Skill title="NextJS" percentage={90} />
        <Skill title="HTML" percentage={99} />
        <Skill title="CSS" percentage={90} />
        <Skill title="Redux" percentage={80} />
        <Skill title="Firebase" percentage={92} />
        <Skill title="Node" percentage={60} />
        <Skill title="React Native" percentage={55} />
        <div className="lg:col-span-2">
          <BodyText>
            Frontend Engineer believing in the power of web and mobile app
            development. Focused on{" "}
            <span className="underline decoration-myYellow">
              frontend development
            </span>{" "}
            but yet building skills on{" "}
            <span className="underline decoration-myGreen">
              backend(NodeJS) and mobile app(React Native) development
            </span>
            . Experienced in working with the MVC architecture and the{" "}
            <span className="underline decoration-myYellow">Agile</span> way of
            development. I&apos;m keen on exploring new technologies and I
            always try to stay up-to-minute. Apart from these, I have other
            skills, such as{" "}
            <span className="underline decoration-myGreen">Communication</span>,
            working in a team and learning new skills. I fluently use{" "}
            <span className="underline decoration-myYellow">
              Adobe Photoshop
            </span>{" "}
            and{" "}
            <span className="underline decoration-myGreen">Illustrator</span> to
            create some web and mobile assets, Adobe XD for designing the
            websites before coding them. I&apos;m ready and willing to{" "}
            <span className="underline decoration-myYellow">join a team</span>.
          </BodyText>
        </div>
      </div>
    </div>
  );
}
