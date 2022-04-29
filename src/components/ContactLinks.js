import Image from "next/image";

export default function ContactLinks({ showOnSm, showOnMd }) {
  const handleOpenLink = link => {
    window.open(link);
  };
  return (
    <div
      className={`space-x-5 ${
        showOnMd
          ? "hidden md:flex md:flex-row"
          : showOnSm
          ? "flex flex-row md:hidden"
          : " flex flex-row "
      }`}
    >
      <div
        className="cursor-pointer"
        onClick={() =>
          handleOpenLink("https://www.linkedin.com/in/obendesmond/")
        }
      >
        <Image
          width={55}
          height={55}
          src="/assets/logos/linkedin.png"
          objectFit="contain"
          alt="linkedIn logo"
        />
      </div>
      <div
        className="cursor-pointer"
        onClick={() => handleOpenLink("https://github.com/obendesmond")}
      >
        <Image
          width={55}
          height={55}
          src="/assets/logos/git2.png"
          objectFit="contain"
          alt="github logo"
        />
      </div>
      <div
        className="cursor-pointer"
        onClick={() => handleOpenLink("mailto:obendesmond2@gmail.com")}
      >
        <Image
          width={55}
          height={55}
          src="/assets/logos/email.png"
          objectFit="contain"
          alt="email in logo"
        />
      </div>
    </div>
  );
}
