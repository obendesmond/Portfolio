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

      {/* {projectsData?.map((project, index) => (
        <Project key={index} {...project} />
      ))} */}

      {/* first static project */}
      <div
        className={`bg-[#00052B] pb-10 pt-10 flex flex-col-reverse justify-between items-start md:grid md:grid-cols-2 md:gap-20 md:pb-0 md:pt-52`}
      >
        <div
          className={`hidden bg-[url('/assets/mockups/obenify.jpg')] bg-cover bg-no-repeat shadow-[36px_-20px_66px_-4px_rgba(0,0,0,0.37)] w-full h-[420px] rounded-tr-[40px] md:flex`}
        ></div>

        <div className=" flex flex-col space-y-5 px-6 mt-24 md:mt-0">
          <div className="text-center md:text-left">
            <h1 className="text-white text-2xl font-bold uppercase">
              Desmozon App
            </h1>
          </div>
          <p className="text-white text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            debitis alias quasi fuga vel, sint aut omnis assumenda labore nulla
            sed fugiat perspiciatis molestias soluta sit magnam perferendis,
            possimus numquam?
          </p>
          <div
            className={`block bg-[url('/assets/mockups/obenify.jpg')] bg-contain bg-no-repeat  w-full h-[200px] rounded-xl md:hidden`}
          ></div>

          <div className="flex flex-wrap space-x-3 space-y-3 items-end justify-center md:justify-start ">
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              HTML
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              CSS
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              JS
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              REACT
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              NEXT
            </p>
          </div>
          {/* btn */}
          <div className="flex flex-col justify-center space-y-5 md:space-y-0 md:justify-start md:flex-row md:space-x-10">
            <Button Icon={VisibilityIcon} text="View Live" bordered />
            <Button Icon={GitHubIcon} text="View Code" />
          </div>
        </div>
      </div>

      {/*second static project */}
      <div
        className={`bg-[#310721] pb-10 pt-10 flex flex-col-reverse justify-between items-start md:grid md:grid-cols-2 gap-20 md:pb-0 md:pt-52`}
      >
        <div
          className={`hidden bg-[url('/assets/mockups/obenify.jpg')] bg-cover bg-no-repeat shadow-[36px_-20px_66px_-4px_rgba(0,0,0,0.37)] w-full h-[420px] rounded-tr-[40px] md:flex`}
        ></div>

        <div className=" flex flex-col space-y-5 px-6 mt-24 md:mt-0">
          <div className="text-center md:text-left">
            <h1 className="text-white text-2xl font-bold uppercase">
              Desmozon App
            </h1>
          </div>
          <p className="text-white text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            debitis alias quasi fuga vel, sint aut omnis assumenda labore nulla
            sed fugiat perspiciatis molestias soluta sit magnam perferendis,
            possimus numquam?
          </p>
          <div
            className={`block bg-[url('/assets/mockups/obenify.jpg')] bg-contain bg-no-repeat  w-full h-[200px] rounded-xl md:hidden`}
          ></div>

          <div className="flex flex-wrap space-x-3 space-y-3 items-end justify-center md:justify-start ">
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              HTML
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              CSS
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              JS
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              REACT
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              NEXT
            </p>
          </div>
          {/* btn */}
          <div className="flex flex-col justify-center space-y-5 md:space-y-0 md:justify-start md:flex-row md:space-x-10">
            <Button Icon={VisibilityIcon} text="View Live" bordered />
            <Button Icon={GitHubIcon} text="View Code" />
          </div>
        </div>
      </div>

      {/* third static project */}
      <div
        className={`bg-[#1F4609] pb-10 pt-10 flex flex-col-reverse justify-between items-start md:grid md:grid-cols-2 md:pb-0 gap-20 md:pt-52`}
      >
        <div
          className={`hidden bg-[url('/assets/mockups/obenify.jpg')] bg-cover bg-no-repeat shadow-[36px_-20px_66px_-4px_rgba(0,0,0,0.37)] w-full h-[420px] rounded-tr-[40px] md:flex`}
        ></div>

        <div className=" flex flex-col space-y-5 px-6 mt-24 md:mt-0">
          <div className="text-center md:text-left">
            <h1 className="text-white text-2xl font-bold uppercase">
              Desmozon App
            </h1>
          </div>
          <p className="text-white text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            debitis alias quasi fuga vel, sint aut omnis assumenda labore nulla
            sed fugiat perspiciatis molestias soluta sit magnam perferendis,
            possimus numquam?
          </p>
          <div
            className={`block bg-[url('/assets/mockups/obenify.jpg')] bg-contain bg-no-repeat  w-full h-[200px] rounded-xl md:hidden`}
          ></div>

          <div className="flex flex-wrap space-x-3 space-y-3 items-end justify-center md:justify-start ">
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              HTML
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              CSS
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              JS
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              REACT
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              NEXT
            </p>
          </div>
          {/* btn */}
          <div className="flex flex-col justify-center space-y-5 md:space-y-0 md:justify-start md:flex-row md:space-x-10">
            <Button Icon={VisibilityIcon} text="View Live" bordered />
            <Button Icon={GitHubIcon} text="View Code" />
          </div>
        </div>
      </div>

      {/* load more btn */}
      <div className="text-center bg-myDark pt-10">
        <a href="#more-education" className="text-white">
          Load More Work...
        </a>
      </div>
    </div>
  );
}
