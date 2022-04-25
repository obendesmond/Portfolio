import React from "react";

export default function Button({ text, bordered, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 text-[13px] py-[10px] rounded-lg border-2 border-myOrange text-white ${
        bordered ? "bg-myDark2" : "bg-myOrange"
      } md:px-10 md:py-[18px] md:text-[15px]`}
    >
      {text}
    </button>
  );
}
