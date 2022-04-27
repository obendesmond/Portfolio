import React from "react";

export default function Title({ text, sm, md }) {
  return (
    <h1
      className={`leading-[60px] ${sm} text-6xl font-bold text-white md:${md} md:text-[80px] md:leading-[80px]`}
    >
      {text}
    </h1>
  );
}
