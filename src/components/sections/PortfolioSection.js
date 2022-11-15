import Button from "../Button";
import Project from "../Project";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";
import projects from "../../data/projects";

export default function PortfolioSection() {
  return (
    <div
      id="portfolio"
      className="relative flex flex-col mx-auto bg-[#00052B] mt-40 pt-20"
    >
      <h1 className="leading-[60px] text-center text-5xl font-bold text-white md:text-[80px] md:leading-[80px]">
        Portfolio
      </h1>

      {/* projects */}

      {projects?.map((project, index) => (
        <Project key={index} {...project} />
      ))}

      {/* load more btn */}
      <div className="text-center bg-myDark pt-10">
        <a
          href="https://github.com/obendesmond"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          See More Work...
        </a>
      </div>
    </div>
  );
}
