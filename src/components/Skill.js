import React from "react";

export default function Skill({ title, percentage }) {
  return (
    percentage && (
      <div className="w-full flex flex-col">
        <div className={`flex flex-row justify-between items-center}`}>
          <h2 className="text-xl text-center text-white md:text-left">
            {title}
          </h2>
        </div>
        <div className="rounded-full bg-mySkillEmpty h-2">
          <div
            className={`rounded-l-full rounded-r-full bg-myOrange h-2
          `}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    )
  );
}
