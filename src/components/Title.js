import React from "react";

export default function Title({ children, right, heroTitle }) {
  return (
    <h1
      className={`${
        heroTitle ? "text-7xl" : "text-5xl"
      } md:text-8xl font-bold text-center text-white ${
        right ? "md:text-right" : "md:text-left"
      }`}
    >
      {children}
    </h1>
  );
}
