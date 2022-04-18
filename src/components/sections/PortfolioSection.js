import Image from "next/image";
import React from "react";
import Title from "../Title";

export default function PortfolioSection() {
  return (
    <div className="flex flex-col space-y-10 mx-auto bg-myDark border-t-[20px] border-myBorder px-10 py-20 md:space-y-0">
      {/* top title */}
      <div className="mb-10">
        <Title right>
          <span
            className="text-myYellow bg-clip-text text-transparent
          bg-gradient-to-r from-myYellow to-myGreen"
          >
            Portfolio
          </span>
        </Title>
      </div>

      {/* portfolio designs */}
      <div className="border border-myYellow h-10 flex flex-col justify-bewteen items-center md:flex-row"></div>
    </div>
  );
}
