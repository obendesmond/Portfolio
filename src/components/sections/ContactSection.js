import Image from "next/image";
import ContactLinks from "../ContactLinks";

export default function ContactSection() {
  return (
    <div id="contact" className="bg-[#051926] pt-40 px-10 py-20 md:space-y-0">
      {/* top title */}
      <h1 className="leading-[60px] mb-20 text-center text-5xl font-bold text-white md:text-[80px] md:leading-[80px]">
        Contact Me
      </h1>

      <div className="container mx-auto border border-myOrange rounded-lg">
        <div className="flex flex-col-reverse items-center justify-center md:flex-row md:space-x-10">
          <div className="flex-col self-start mt-5 w-full rounded-lg">
            <div className="p-5">
              <p className="text-white">Official Address</p>
              <p className="text-gray-400">Cameroon, Untarred Malingo Street</p>
            </div>
            <div className="p-5">
              <p className="text-white">Official Email</p>
              <p className="text-gray-400">obendesmond2@gmail.com</p>
            </div>
            <div className="p-5">
              <p className="text-white">Official Contact</p>
              <p className="text-gray-400">+237 653491687</p>
            </div>
            <div className="p-5 ">
              <ContactLinks />
            </div>
          </div>
          <div className="space-y-10 max-w-xl flex-col p-5 justify-between">
            <input
              type="text"
              placeholder="Enter name"
              className="text-white outline-none bg-transparent border border-myOrange w-full py-2 px-4 rounded-lg"
            />
            <input
              type="email"
              placeholder="example@expert.com"
              className="text-white outline-none bg-transparent border border-myOrange w-full py-2 px-4 rounded-lg"
            />
            <input
              type="text"
              placeholder="Enter subject"
              className="text-white outline-none bg-transparent border border-myOrange w-full py-2 px-4 rounded-lg"
            />
            <textarea
              placeholder="Hey Desmond, we have a project at hand..."
              className="text-white outline-none bg-transparent border border-myOrange rounded-lg w-full p-2"
              name="messageArea"
              id="messageArea"
              cols="30"
              rows="5"
            />

            <button className="w-full transition ease-in-out px-5 text-[13px] py-[10px] rounded-lg border-2 border-myOrange bg-myOrange text-black hover:text-white hover:bg-opacity-20 md:px-6 md:py-[10px] md:text-[15px]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
