import React from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { styled } from "@mui/material/styles";

const BlackTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export default function CustomTooltip({ title, tooltipPosition, children }) {
  return (
    <BlackTooltip
      TransitionComponent={Zoom}
      placement={tooltipPosition || "bottom"}
      arrow
      title={title}
      className="text-gray-400"
    >
      {children}
    </BlackTooltip>
  );
}
