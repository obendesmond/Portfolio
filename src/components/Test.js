import Image from "next/image";
import React from "react";

export default function text() {
  return (
    <div className="bg-myDark">
      <div className="container flex flex-row justify-between bg-myDark shadow-md bg-opacity-80 shadow-myYellow align-middle border border-myYellow border-t-0 mx-auto rounded-b-full mb-20">
        <Image
          width={200}
          height={50}
          src="/assets/desmond.png"
          alt="desmond"
          objectFit="contain"
          className="mx-auto"
        />
        <div className="hidden md:flex flex-row my-auto text-white mr-10">
          <a
            href="#about"
            className="mx-6 hover:underline hover:decoration-myYellow"
          >
            About
          </a>
          <a
            href="#skills"
            className="mx-6 hover:underline hover:decoration-myYellow"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="mx-6 hover:underline hover:decoration-myYellow"
          >
            Experience
          </a>
          <a
            href="#portfolio"
            className="mx-6 hover:underline hover:decoration-myYellow"
          >
            Portfolio
          </a>
        </div>
        <div className="flex md:hidden text-myYellow my-auto mr-10">MENU</div>
      </div>

      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <Image
            width={100}
            height={100}
            className="h-12 w-12 rounded-full"
            src={`/assets/erin-lindford.jpg`}
            alt="girl logo"
          />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
          <button className="rounded-full shadow-sm font-black shadow-myGreen border-4 border-myYellow bg-myGreen text-white px-5 py-2 hover:bg-myYellow hover:text-black hover:border-myGreen hover:shadow-myYellow">
            Contact
          </button>
          <button className="rounded-full px-5 py-2 bg-myGreen focus:outline-none focus:ring focus:ring-myYellow">
            Portfolio
          </button>
        </div>
      </div>

      <div className="container max-w-sm mx-auto mt-12 shadow-xl px-5 py-4">
        <form>
          <label className="block">
            <span className="after:absolute after:rounded-full after:p-1 after:bg-pink-500 block text-sm font-medium text-slate-700">
              Username
            </span>
            <input
              placeholder="username"
              type="email"
              // disabled
              className={styles.input + " peer"}
            />
            <p className="invisible peer-invalid:visible py-2 text-pink-500">
              enter the right email
            </p>
          </label>
        </form>
      </div>
    </div>
  );
}

const styles = {
  input: `mt-1 block w-full px-3 py-2 bg-white border border-myGreen rounded-full text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-myYellow focus:ring-1 focus:ring-myYellow disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500
  `,
};
