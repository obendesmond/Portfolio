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

      {/* first project */}
      <div
        className={`bg-[#00052B] pb-10 pt-10 flex flex-col-reverse justify-between items-start md:grid md:grid-cols-2 md:pb-0 gap-20 md:pt-52`}
      >
        <div
          className={`hidden bg-[url('/assets/projects/desmozon_mac.png')] bg-right-top bg-no-repeat shadow-[36px_-20px_66px_-4px_rgba(0,0,0,0.37)] w-full h-[420px] rounded-tr-[40px] md:flex`}
        ></div>

        <div className=" flex flex-col space-y-5 px-6 mt-24 md:mt-0">
          <div className="text-center md:text-left">
            <h1 className="text-white text-2xl font-bold uppercase">
              Desmozon App
            </h1>
          </div>
          <p className="text-white text-justify">
            It&apos;s a mobile responsive amazon clone - &quot;Watch Now -
            Include with Prime&quot;
          </p>
          <div
            className={`flex bg-[url('/assets/projects/desmozon_mac.png')] bg-contain bg-no-repeat  w-full h-[200px] rounded-xl md:hidden`}
          ></div>

          <div className="flex flex-wrap space-x-3 space-y-3 items-end justify-center md:justify-start">
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              ReactJS
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              NextJS
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              TailwindCSS
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              HTML
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              CSS
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              Firebase
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              Git
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              Mobile Responsive
            </p>
          </div>
          {/* btn */}
          <div className="flex flex-col justify-center space-y-5 md:space-y-0 md:justify-start md:flex-row md:space-x-10">
            <Button
              onClick={() => window.open("https://desmozon.vercel.app/")}
              Icon={VisibilityIcon}
              text="View Live"
              bordered
            />
            <Button
              onClick={() =>
                window.open("https://github.com/obendesmond/Desmozon")
              }
              Icon={GitHubIcon}
              text="View Code"
            />
          </div>
        </div>
      </div>

      {/* second project */}
      <div
        className={`bg-[#310721] pb-10 pt-10 flex flex-col-reverse justify-between items-start md:grid md:grid-cols-2 md:pb-0 gap-20 md:pt-52`}
      >
        <div
          className={`hidden bg-[url('/assets/projects/obenify.png')] bg-right-top bg-no-repeat shadow-[36px_-20px_66px_-4px_rgba(0,0,0,0.37)] w-full h-[420px] rounded-tr-[40px] md:flex`}
        ></div>

        <div className=" flex flex-col space-y-5 px-6 mt-24 md:mt-0">
          <div className="text-center md:text-left">
            <h1 className="text-white text-2xl font-bold uppercase">
              Obenify Cloud Hosting
            </h1>
          </div>
          <p className="text-white text-justify">
            It&apos;s a mobile responsive user interface for the cloud hosting
            company; obenify - &quot;Deploy your websites in less than 60
            seconds.&quot; - Cloud Hosting for Pros.
          </p>
          <div
            className={`flex bg-[url('/assets/projects/obenify.png')] bg-contain bg-no-repeat  w-full h-[200px] rounded-xl md:hidden`}
          ></div>

          <div className="flex flex-wrap space-x-3 space-y-3 items-end justify-center md:justify-start">
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
              Git
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              Mobile Responsive
            </p>
          </div>
          {/* btn */}
          <div className="flex flex-col justify-center space-y-5 md:space-y-0 md:justify-start md:flex-row md:space-x-10">
            <Button
              onClick={() => window.open("https://obenify.netlify.app/")}
              Icon={VisibilityIcon}
              text="View Live"
              bordered
            />
            <Button
              onClick={() =>
                window.open("https://github.com/obendesmond/obenify")
              }
              Icon={GitHubIcon}
              text="View Code"
            />
          </div>
        </div>
      </div>

      {/* third project */}
      <div
        className={`bg-[#1F4609] pb-10 pt-10 flex flex-col-reverse justify-between items-start md:grid md:grid-cols-2 md:pb-0 gap-20 md:pt-52`}
      >
        <div
          className={`hidden bg-[url('/assets/projects/foodbuddy.png')] bg-right-top bg-no-repeat shadow-[36px_-20px_66px_-4px_rgba(0,0,0,0.37)] w-full h-[420px] rounded-tr-[40px] md:flex`}
        ></div>

        <div className=" flex flex-col space-y-5 px-6 mt-24 md:mt-0">
          <div className="text-center md:text-left">
            <h1 className="text-white text-2xl font-bold uppercase">
              Food Buddy
            </h1>
          </div>
          <p className="text-white text-justify">
            It&apos;s a personal food assistance for &quot;Mr. Doradas&quot; -
            &quot;Recipe, Menu and Pantry&quot; - Food Planning UI
          </p>
          <div
            className={`flex bg-[url('/assets/projects/foodbuddy.png')] bg-contain bg-no-repeat  w-full h-[200px] rounded-xl md:hidden`}
          ></div>

          <div className="flex flex-wrap space-x-3 space-y-3 items-end justify-center md:justify-start">
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              ReactJS
            </p>
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
              Git
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              Mobile Responsive
            </p>
          </div>
          {/* btn */}
          <div className="flex flex-col justify-center space-y-5 md:space-y-0 md:justify-start md:flex-row md:space-x-10">
            <Button
              onClick={() =>
                window.open("http://recipeplannerapp.herokuapp.com/")
              }
              Icon={VisibilityIcon}
              text="View Live"
              bordered
            />
            <Button
              onClick={() =>
                window.open("https://github.com/obendesmond/recipeApp")
              }
              Icon={GitHubIcon}
              text="View Code"
            />
          </div>
        </div>
      </div>

      {/* fifth project */}
      <div
        className={`bg-[#00052B] pb-10 pt-10 flex flex-col-reverse justify-between items-start md:grid md:grid-cols-2 md:pb-0 gap-20 md:pt-52`}
      >
        <div
          className={`hidden bg-[url('/assets/projects/gpt3.png')] bg-right-top object-contain bg-no-repeat shadow-[36px_-20px_66px_-4px_rgba(0,0,0,0.37)] w-full h-[420px] rounded-tr-[40px] md:flex`}
        ></div>

        <div className=" flex flex-col space-y-5 px-6 mt-24 md:mt-0">
          <div className="text-center md:text-left">
            <h1 className="text-white text-2xl font-bold uppercase">GPT3</h1>
          </div>
          <p className="text-white text-justify">
            It&apos;s an AI Landing Page.
          </p>
          <div
            className={`flex bg-[url('/assets/projects/gpt3.png')] bg-contain bg-no-repeat  w-full h-[200px] rounded-xl md:hidden`}
          ></div>

          <div className="flex flex-wrap space-x-3 space-y-3 items-end justify-center md:justify-start">
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              ReactJS
            </p>

            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              HTML
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              CSS
            </p>

            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              Git
            </p>
            <p className="py-1 px-5 text-white rounded-lg bg-transparent border border-white">
              Mobile Responsive
            </p>
          </div>
          {/* btn */}
          <div className="flex flex-col justify-center space-y-5 md:space-y-0 md:justify-start md:flex-row md:space-x-10">
            <Button
              onClick={() => window.open("https://gpt3-done.netlify.app/")}
              Icon={VisibilityIcon}
              text="View Live"
              bordered
            />
            <Button
              onClick={() => window.open("https://github.com/obendesmond/gt3")}
              Icon={GitHubIcon}
              text="View Code"
            />
          </div>
        </div>
      </div>

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
