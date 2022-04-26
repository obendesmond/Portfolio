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
    <div
      className={`rounded-2xl bg-[url('/assets/certs/HTML-Cert3.jpg')] bg-cover bg-no-repeat bg-center w-[300px] h-[200px] md:w-[356px] md:h-[235px]`}
    >
      {/* <img
        className=" rounded-xl mx-auto"
        src={`/assets/certs/` + imgSrc}
        alt=""
        width={500}
        height={500}
        objectFit="contain"
      ></img> */}
      {/* <Image
        width={500}
        height={500}
        objectFit="contain"
        src={`/assets/certs/` + imgSrc}
        alt="reactjs"
        style={{
          borderRadius: "20px!important",
          border: "3px solid red !important",
        }}
      /> */}
    </div>
  );
}
