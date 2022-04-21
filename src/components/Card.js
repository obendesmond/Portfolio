import Image from "next/image";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LinkIcon from "@mui/icons-material/Link";
import CustomTooltip from "./CustomTooltip";
import { IconButton } from "@mui/material";

export default function Card({ imgSrc, logos, courseLink }) {
  const ActionLink = (Icon, title) => (
    <CustomTooltip title={title}>
      <IconButton
        disableRipple
        className="cursor-pointer text-white bg-myGreen hover:text-myDark hover:bg-myYellow"
        style={{ color: "white", backgroundColor: "#009743" }}
      >
        <Icon />
      </IconButton>
    </CustomTooltip>
  );

  return (
    <div className="flex flex-col justify-center">
      <Image
        width={500}
        height={500}
        objectFit="contain"
        src={`/assets/` + imgSrc}
        alt="reactjs"
        style={{ marginTop: "-45px" }}
      />
      <div className="flex flex-row justify-between items-center px-2 h-14 -mt-[45px] w-full bg-myDark bg-opacity-80 backdrop-blur-[2px]">
        <div className=" flex flex-row justify-between flex-[0.5]">
          {logos.map(logo => (
            <Image
              key={logo}
              src={`/assets/` + logo}
              height={30}
              width={30}
              objectFit="contain"
              alt={`${logo}`}
            />
          ))}
        </div>

        <div className=" flex flex-row space-x-2 justify-between flex-[0.2]">
          {ActionLink(VisibilityIcon, "view doc")}
          {ActionLink(LinkIcon, "see curriculum")}
        </div>
      </div>
    </div>
  );
}
