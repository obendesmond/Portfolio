import React, { useState } from "react";
import Zoom from "@mui/material/Zoom";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ContactLinkIcon from "./ContactLinkIcon";
import CustomTooltip from "./CustomTooltip";

export default function ContactLinks() {
  const [show, setShow] = useState(true);

  const handleShow = () => setShow(!show);

  return (
    <div>
      <Zoom in={show} easing="ease-in-out">
        <div
          style={{ display: show ? "block" : "none" }}
          className="border-2 border-myYellow fixed bottom-24 right-5 bg-myDark bg-opacity-80 backdrop-blur-[2px] rounded-full z-50 w-[60px] h-[200px]"
        >
          <div className="flex flex-col py-3 px-5 items-center justify-between h-[100%]">
            <ContactLinkIcon
              Icon={GitHubIcon}
              title="see my Github"
              tooltipPosition="left"
            />
            <ContactLinkIcon
              Icon={LinkedInIcon}
              title="see my LinkedIn"
              tooltipPosition="left"
            />
            <ContactLinkIcon
              Icon={EmailIcon}
              title="send me an Email"
              tooltipPosition="left"
            />
          </div>
        </div>
      </Zoom>

      <Zoom in easing="ease-in-out">
        <div
          onClick={handleShow}
          className="border-2 cursor-pointer shadow-sm shadow-myGreen border-myYellow fixed flex items-center justify-center bottom-5 right-5 bg-myDark bg-opacity-80 backdrop-blur-[2px] rounded-full z-50 w-[60px] h-[60px]"
        >
          {show ? (
            <CustomTooltip title="close speed dial" tooltipPosition="left">
              <Zoom in easing="ease-in-out">
                <RemoveOutlinedIcon style={{ color: "white" }} />
              </Zoom>
            </CustomTooltip>
          ) : (
            <CustomTooltip title="open speed dial" tooltipPosition="left">
              <Zoom in easing="ease-in-out">
                <AddOutlinedIcon style={{ color: "white" }} />
              </Zoom>
            </CustomTooltip>
          )}
        </div>
      </Zoom>
    </div>
  );
}
