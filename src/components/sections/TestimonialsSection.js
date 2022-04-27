import Image from "next/image";
import BodyText from "../BodyText";
import Card from "../Card";
import Skill from "../Skill";
import Title from "../Title";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      img: "/assets/testimonials/Perick.webp",
      name: "@Perick (UI/UX Designer)",
      text: `I&apos;m really happy with your determination, communication and
              consistency to finish this project Desmond. I know it wasn&apos;t
              easy, but I knew you could do it. Your helpful attitude makes it
              clear that you can continue to take on new challenges and grow
              with the company. Thank you for your extra effort Desmond.`,
    },
  ];

  return (
    <div
      id="education"
      className="relative flex flex-col space-y-10 mx-auto bg-[#051926] pt-40 px-10 py-20 md:space-y-0"
    >
      {/* top title */}
      <h1 className="leading-[60px] text-center text-5xl font-bold text-white md:text-[80px] md:leading-[80px]">
        Testimonials
      </h1>

      <div className="pt-10">
        <div className="relative container mx-auto bg-[#132C3A] rounded-3xl max-w-3xl px-10 py-10 md:px-20">
          <div className="py-16">
            <p className="text-white leading-6 text-justify">
              I&apos;m really happy with your determination, communication and
              consistency to finish this project Desmond. I know it wasn&apos;t
              easy, but I knew you could do it. Your helpful attitude makes it
              clear that you can continue to take on new challenges and grow
              with the company. Thank you for your extra effort Desmond.
            </p>
          </div>

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

      {/* absolute circle */}
      <div className="absolute top-64 right-64 p-10 blur-2xl bg-white rounded-full md:blur-3xl md:p-14"></div>
    </div>
  );
}
