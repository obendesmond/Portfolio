import React from "react";

export default function Title({ children, right }) {
  return (
    <h1
      className={`text-7xl md:text-8xl font-bold text-center text-white ${
        right ? "md:text-right" : "md:text-left"
      }`}
    >
      {children}
    </h1>
  );
}
