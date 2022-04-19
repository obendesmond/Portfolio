import React from "react";

export default function Button({ text, Icon }) {
  return (
    <button className="py-3 px-5 outline-none font-bold text-white border-2 border-myYellow bg-myGreen rounded-full hover:text-black hover:bg-myYellow hover:border-myGreen">
      {text} {Icon && <Icon />}
    </button>
  );
}
