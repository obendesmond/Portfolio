import Button from "../Button";
import Project from "../Project";

export default function PortfolioSection() {
  return (
    <div
      id="portfolio"
      className="relative flex flex-col mx-auto bg-[#00052B] mt-40 py-20"
    >
      {/* gradient container */}
      <div className="absolute top-0 bg-gradient-to-b from-myDark to-[#00052B] w-full h-20"></div>

      <h1 className="leading-[60px] text-center text-6xl font-bold text-white md:text-[80px] md:leading-[80px]">
        Portfolio
      </h1>

      {/* projects */}

      <Project
        title="Desmozon App"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            officiis, voluptatibus in sunt sapiente eaque aperiam debitis illo
            itaque saepe facilis ducimus, quod nam similique esse distinctio et!
            Dolores, minus."
        imgSrc="desmozon_mac.jpg"
        tags={["HTML", "CSS", "JS", "REACTJS", "NEXTJS"]}
        bgColor="#00052B"
        colorTo="#320721"
      />
      <Project
        title="Obenify Cloud Hosting UI"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            officiis, voluptatibus in sunt sapiente eaque aperiam debitis illo
            itaque saepe facilis ducimus, quod nam similique esse distinctio et!
            Dolores, minus."
        imgSrc="obenify.jpg"
        tags={["HTML", "CSS", "JS", "REACTJS", "NEXTJS"]}
        bgColor="#320721"
        colorTo="#00052B"
      />

      {/* load more btn */}
      <div className="text-center">
        <a href="#more-education" className="text-white">
          Load More Work...
        </a>
      </div>
    </div>
  );
}
