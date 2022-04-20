import BodyText from "../BodyText";
import Button from "../Button";
import Skill from "../Skill";
import Title from "../Title";

export default function ContactSection() {
  return (
    <div
      id="contact"
      className="bg-myDark border-t-[20px] border-myBorder px-10 py-20 md:space-y-0"
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
      <div className="container mx-auto border border-myYellow rounded-xl">
        <div className="flex flex-col-reverse items-center justify-center md:flex-row md:space-x-10">
          <div className="flex-col self-start mt-5 w-full rounded-lg">
            <div className="p-5 rounded-t-xl">
              <p className="text-white">Official Address</p>
              <p className="text-gray-400">Cameroon, Untarred Malingo Street</p>
            </div>
            <div className="p-5 rounded-t-xl">
              <p className="text-white">Official Email</p>
              <p className="text-gray-400">obendesmond2@gmail.com</p>
            </div>
            <div className="p-5 rounded-b-xl">
              <p className="text-white">Official Contact</p>
              <p className="text-gray-400">+237 653491687</p>
            </div>
          </div>
          <div className="space-y-10 max-w-xl flex-col p-5 justify-between">
            <input
              type="text"
              placeholder="Enter name"
              className="text-gray-400 outline-none bg-transparent border border-myGreen w-full py-2 px-4 rounded-full"
            />
            <input
              type="email"
              placeholder="example@expert.com"
              className="text-gray-400 outline-none bg-transparent border border-myGreen w-full py-2 px-4 rounded-full"
            />
            <input
              type="text"
              placeholder="Enter subject"
              className="text-gray-400 outline-none bg-transparent border border-myGreen w-full py-2 px-4 rounded-full"
            />
            <textarea
              placeholder="Hey Desmond, we have a project at hand..."
              className="text-gray-400 outline-none bg-transparent border border-myGreen rounded-xl w-full p-2"
              name="messageArea"
              id="messageArea"
              cols="30"
              rows="5"
            />

            <button className="w-full py-3 px-5 outline-none whitespace-nowrap font-bold text-white border-2 border-myYellow bg-myGreen rounded-full hover:text-black hover:bg-myYellow hover:border-myGreen">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
