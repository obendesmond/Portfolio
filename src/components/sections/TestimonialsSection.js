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
        <div className="relative container mx-auto bg-myDark rounded-b-3xl px-20 py-10">
          <div
            className="absolute top-5 left-5 text-8xl text-gray-400"
            aria-hidden="true"
          >
            &#8220;
          </div>
          <div className="mb-10">
            <BodyText>
              I&apos;m really happy with your determination, communication and
              consistency to finish this project Desmond. I know it wasn't easy,
              but I knew you could do it. Your helpful attitude makes it clear
              that you can continue to take on new challenges and grow with the
              company. Thank you for your extra effort Desmond.
            </BodyText>
          </div>
          <p className="text-gray-400 text-xl text-left font-bold">@Perick</p>
          <div className=" -mb-[70px] items-center justify-center w-full flex flex-row mx-auto space-x-10">
            <div>
              <Image
                width={50}
                height={50}
                className="object-cover rounded-full grayscale"
                alt="perick"
                src="/assets/testimonials/Perick.webp"
              />
            </div>
            <div>
              <Image
                width={60}
                height={60}
                className="object-cover rounded-full"
                alt="perick"
                src="/assets/testimonials/marc.jpeg"
              />
            </div>
            <div>
              <Image
                width={50}
                height={50}
                className="object-cover rounded-full grayscale"
                alt="perick"
                src="/assets/testimonials/john.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
