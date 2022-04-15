import React from "react";

export default function BodyText({ text, children }) {
  return (
    <p className="first-letter:text-6xl indent-10 md:font-mono text-gray-400 text-xl text-justify ">
      {children}
    </p>
  );
}
