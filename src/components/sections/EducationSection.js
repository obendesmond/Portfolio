import React, { useState, useEffect } from "react";
import Card from "../Card";
import Title from "../Title";
import certificates from "../../data/certificates";
import BodyText from "../BodyText";

export default function EducationSection() {
  const [numOfCerts, setNumOfCerts] = useState(6);
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

  const handleLoadLess = () => setNumOfCerts(6);

  const oneStage = (title, body) => (
    <div className="flex flex-col border-l-8 pb-40 border-myOrange space-y-10 items-center px-5">
      <div className=" flex flex-col text-center space-y-6 md:text-left">
        <h1 className="text-3xl text-white font-bold">{title}</h1>
        <p className="text-white leading-5">{body}</p>
      </div>
    </div>
  );

  return (
    <div
      id="education"
      className="relative flex flex-col justify-center space-y-32 mx-auto"
    >
      <h1 className="leading-[60px] text-center text-6xl font-bold text-white md:text-right md:text-[80px] md:leading-[80px]">
        Education
      </h1>

      {/* experience  */}
      <div className=" relative flex flex-col md:flex-row md:items-center md:justify-around">
        {oneStage(
          "2016 - 2020",
          <>
            University of Buea. <br></br>B.Eng Software Engineering
          </>
        )}
        {oneStage(
          "2018 - 2019",
          <>
            Internship at. <br></br>GPT (myeazyschool)
          </>
        )}
        {oneStage(
          <>
            2019 - <span className="text-myGreen">PRESENT</span>
          </>,
          <>
            Freelance. <br></br>Freelancer at Fiver and Upwork
          </>
        )}

        {/* absolute circle */}
        <div className="absolute top-0 left-0 p-10 blur-2xl bg-myOrange rounded-full md:blur-3xl md:p-14"></div>
      </div>

      {/* cards */}
      <div className="relative mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-20">
        {slicedData.map((cert, i) => (
          <Card key={i} imgSrc={cert.imgSrc} logos={cert.logos} />
        ))}

        {/* absolute circle */}
        <div className="absolute -top-10 left-60 p-10 blur-2xl bg-pink-500 rounded-full md:blur-2xl md:p-10 md:left-80"></div>
        <div className="absolute bottom-0 right-20 p-10 blur-2xl bg-blue-500 rounded-full md:blur-2xl md:p-10"></div>
      </div>

      <div className="text-center">
        {numOfCerts === totalCerts ? (
          <a
            onClick={handleLoadLess}
            href="#see-less-certs"
            className="text-white"
          >
            See Less Certs...
          </a>
        ) : (
          <a
            onClick={handleLoadMore}
            href="#load-more-certs"
            className="text-white"
          >
            Load More Certs...
          </a>
        )}
      </div>
    </div>
  );
}
