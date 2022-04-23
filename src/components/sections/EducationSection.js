import React, { useState, useEffect } from "react";
import Card from "../Card";
import Title from "../Title";
import certificates from "../../data/certificates";

export default function EducationSection() {
  const [numOfCerts, setNumOfCerts] = useState(3);
  const totalCerts = certificates.length;
  const diff = totalCerts - numOfCerts;

  const slicedData = certificates.slice(0, numOfCerts);

  const handleLoadMore = () => {
    if (diff >= 3) setNumOfCerts(numOfCerts + 3);
    else setNumOfCerts(numOfCerts + diff);

    console.log(`Num of Certs: ${numOfCerts}
      Certs: ${certificates.length}
    `);
  };

  const handleLoadLess = () => setNumOfCerts(3);

  return (
    <div
      id="education"
      className="flex flex-col space-y-10 mx-auto bg-black border-t-[20px] border-myBorder px-10 py-20 md:space-y-0"
    >
      <div className="mb-10">
        <Title>
          <span
            className="text-myYellow bg-clip-text text-transparent
          bg-gradient-to-r from-myYellow to-myGreen"
          >
            Education
          </span>
        </Title>
      </div>

      {/* experience  */}
      <div className=" flex flex-col justify-around items-center pt-10 pb-10 space-y-20 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-10 items-center px-5">
          <div className="-mb-10 h-7 w-7 rounded-full bg-myYellow"></div>
          <div className="text-center leading-2">
            <h1 className="text-xl text-gray-400">2016 - 2020</h1>
            <p className="text-gray-400 text-xl">
              University of Buea. <br></br>BTec. Software Engineering
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-10 items-center px-5">
          <div className="-mb-10 h-7 w-7 rounded-full bg-myYellow"></div>
          <div className="text-center leading-2">
            <h1 className="text-xl text-gray-400">2018 - 2019</h1>
            <p className="text-gray-400 text-xl">
              Internship at. <br></br>GPT (myeazyschool)
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-10 items-center px-5">
          <div className="-mb-10 h-7 w-7 rounded-full bg-myYellow"></div>
          <div className="text-center leading-2">
            <h1 className="text-xl text-gray-400">
              2019 - <span className="text-myGreen">PRESENT</span>
            </h1>
            <p className="text-gray-400 text-xl">
              Freelancer. <br></br>Freelance at Fiverr and Upwork
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {slicedData.map((cert, i) => (
          <Card key={i} imgSrc={cert.imgSrc} logos={cert.logos} />
        ))}
      </div>
      <div className="pt-10">
        {numOfCerts === totalCerts ? (
          <a
            onClick={handleLoadLess}
            href="#education"
            className="text-gray-400 font-extrabold text-2xl"
          >
            See Less Certs...
          </a>
        ) : (
          <a
            onClick={handleLoadMore}
            href="#load-more-certs"
            className="text-gray-400 font-extrabold text-2xl"
          >
            Load More Certs...
          </a>
        )}
      </div>
    </div>
  );
}
