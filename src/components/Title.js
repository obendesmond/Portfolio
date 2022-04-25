import React from "react";

export default function Title({ children, left, right, center }) {
  return (
    <h1
      className={`leading-[60px] text-center text-6xl font-bold text-white ${
        left && "md:tex-left"
      } ${right && "md:tex-left"} ${
        center && "md:tex-center"
      } md:text-[80px] md:leading-[80px]`}
    >
      {children}
    </h1>
  );
}
