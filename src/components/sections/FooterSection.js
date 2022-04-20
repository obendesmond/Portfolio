import React from "react";

export default function FooterSection() {
  return (
    <div className="bg-myBorder p-5 text-gray-400">
      <div className="container text-center relative mx-auto">
        <p>
          &copy; 2022. Made with 💜 by{" "}
          <a href="#hero" className="text-myYellow">
            Desmond Oben
          </a>
        </p>
      </div>
    </div>
  );
}
