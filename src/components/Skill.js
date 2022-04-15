import React from "react";

export default function Skill({ title, percentage }) {
  return (
    percentage && (
      <div className="w-full flex flex-col space-y-4">
        <div className={`flex flex-row justify-between items-center}`}>
          <h2 className="text-4xl text-center text-gray-400 md:text-left">
            {title}
          </h2>
          <h2 className="text-4xl text-center text-gray-400 md:text-left">
            {percentage}%
          </h2>
        </div>
        <div className="rounded-full bg-myYellow h-3">
          <div
            className={`rounded-l-full bg-myGreen h-3
          `}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    )
  );
}
