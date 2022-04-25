import React from "react";

export default function BodyText({ children }) {
  return (
    <h2 className="text-sm text-justify text-white leading-6 md:text-center">
      {children}
    </h2>
  );
}
