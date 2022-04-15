import React from "react";

export default function Title({ children }) {
  return (
    <h1 className="text-7xl md:text-8xl font-bold text-center text-white md:text-left">
      {children}
    </h1>
  );
}
