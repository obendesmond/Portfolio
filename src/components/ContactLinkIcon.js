import CustomTooltip from "./CustomTooltip";

export default function ContactLinkIcon({ Icon, title, tooltipPosition }) {
  return (
    <CustomTooltip title={title} tooltipPosition={tooltipPosition}>
      <Icon className="bg-opacity-80 backdrop-blur-[1px] text-white p-[5px] text-5xl bg-myGreen rounded-full hover:bg-myYellow hover:text-myDark" />
    </CustomTooltip>
  );
}
