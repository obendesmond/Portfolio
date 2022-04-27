import React from "react";

export default function Button({ text, bordered, onClick, Icon }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 text-[13px] py-[10px] rounded-lg border-2 border-myOrange bg-myOrange text-white ${
        bordered && "bg-opacity-20"
      } md:px-6 md:py-[10px] md:text-[15px]`}
    >
      {text} {Icon && <Icon />}
    </button>
  );
}
