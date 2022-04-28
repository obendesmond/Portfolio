import React from "react";

export default function Button({ text, bordered, onClick, Icon }) {
  return (
    <button
      onClick={onClick}
      className={`transition ease-in-out px-5 text-[13px] py-[10px] rounded-lg border-2 border-myOrange bg-myOrange text-white ${
        bordered
          ? "text-white bg-opacity-20 hover:text-black hover:bg-opacity-100"
          : "text-black hover:text-white hover:bg-opacity-20"
      } md:px-6 md:py-[10px] md:text-[15px]`}
    >
      {text} {Icon && <Icon />}
    </button>
  );
}
