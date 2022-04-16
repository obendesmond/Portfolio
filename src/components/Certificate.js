import Image from "next/image";
import React from "react";

export default function Certificate({ imgSrc }) {
  return (
    <div className="flex flex-col justify-center">
      <Image
        width={500}
        height={500}
        objectFit="contain"
        src={`/assets/` + imgSrc}
        alt="reactjs"
        style={{ marginTop: "-45px" }}
      />
      <div className="h-14 -mt-[45px] w-full bg-myDark bg-opacity-80 backdrop-blur-[2px]">
        <p>hello world</p>
      </div>
    </div>
  );
}
