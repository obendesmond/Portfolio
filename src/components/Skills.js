import Image from "next/image";
import React from "react";
import Title from "./Title";

export default function Skills() {
  return (
    <div className="flex flex-col space-y-10 mx-auto items-center justify-center bg-myDark border-t-[20px] border-myBorder px-10 py-20 md:space-y-0">
      <div className="mb-10">
        <Title>
          <span className="underline decoration-myYellow decoration-2 underline-offset-8">
            My Skills
          </span>
        </Title>
      </div>

      <div className="border-2 border-myYellow container flex flex-col     space-y-10 md:space-x-10 md:flex-row">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem laboriosam est vitae explicabo recusandae fugit
          consectetur sit itaque! Sed eveniet pariatur natus veritatis, magnam
          consequatur asperiores similique doloribus cum quasi.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem laboriosam est vitae explicabo recusandae fugit
          consectetur sit itaque! Sed eveniet pariatur natus veritatis, magnam
          consequatur asperiores similique doloribus cum quasi.
        </p>
      </div>
    </div>
  );
}
