import React from "react";

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-myBorder p-5 text-gray-400">
      <div className="container text-center relative mx-auto">
        <p>
          &copy; {year}. Made with 💜 by{" "}
          <a href="#hero" className="text-myOrange">
            Desmond Oben
          </a>
        </p>
      </div>
    </div>
  );
}
