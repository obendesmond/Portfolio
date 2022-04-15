import BodyText from "../BodyText";
import Skill from "../Skill";
import Title from "../Title";

export default function SkillsSection() {
  return (
    <div className="flex flex-col space-y-10 mx-auto bg-myDark border-t-[20px] border-myBorder px-10 py-20 md:space-y-0">
      {/* top title */}
      <div className="mb-10">
        <Title right>
          <span
            // className="underline decoration-myYellow decoration-2 underline-offset-8"
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
        <Skill title="MongoDB" percentage={60} />
        <div className="lg:col-span-2">
          <BodyText>
            Full Stack Engineer believing in the power of web and mobile app
            development. Experienced in most stages of advanced full stack
            development. Focused on single-page application development, CSS/JS
            animations, semantics, accessibility, and progressive enhancement
            including the MVC structure of development. However, I&apos;m keen
            on exploring new languages and I always try to stay up-to-minute.
            Apart from these, I have other computer skills, such as I fluently
            use Adobe Photoshop and Illustrator to create some web and mobile
            assets, Adobe XD for designing the websites before coding them. I
            also have basic knowledge in Blender, Unreal Engine, Adobe Premier
            and Adobe After Effect and I use them as a hobby.
          </BodyText>
        </div>
      </div>
    </div>
  );
}
