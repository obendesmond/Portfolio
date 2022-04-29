import Button from "../Button";
import Project from "../Project";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function PortfolioSection({ projectsData }) {
  return (
    <div
      id="portfolio"
      className="relative flex flex-col mx-auto bg-[#00052B] mt-40 pt-20"
    >
      <h1 className="leading-[60px] text-center text-5xl font-bold text-white md:text-[80px] md:leading-[80px]">
        Portfolio
      </h1>

      {/* projects */}

      {projectsData?.map((project, index) => (
        <Project key={index} {...project} />
      ))}

      {/* load more btn */}
      <div className="text-center bg-myDark pt-10">
        <a href="#more-education" className="text-white">
          Load More Work...
        </a>
      </div>
    </div>
  );
}
