import Zoom from "@mui/material/Zoom";
import Image from "next/image";

export default function ContactLinks() {
  return (
    <div className="hidden fixed bottom-5 right-5 z-10 md:flex md:flex-row md:space-x-5">
      <div className="cursor-pointer">
        <Image
          width={55}
          height={55}
          src="/assets/logos/linkedin.png"
          objectFit="contain"
          alt="linked in logo"
        />
      </div>
      <div className=" cursor-pointer">
        <Image
          width={55}
          height={55}
          src="/assets/logos/git2.png"
          objectFit="contain"
          alt="linked in logo"
        />
      </div>
      <div className=" cursor-pointer">
        <Image
          width={55}
          height={55}
          src="/assets/logos/email.png"
          objectFit="contain"
          alt="linked in logo"
        />
      </div>
    </div>
  );
}

export function ContactLink2() {
  return (
    <div className="flex flex-row mx-auto space-x-5 md:hidden">
      <div className="cursor-pointer ">
        <Image
          width={55}
          height={55}
          src="/assets/logos/linkedin.png"
          objectFit="contain"
          alt="linked in logo"
        />
      </div>
      <div className=" cursor-pointer">
        <Image
          width={55}
          height={55}
          src="/assets/logos/git2.png"
          objectFit="contain"
          alt="linked in logo"
        />
      </div>
      <div className=" cursor-pointer">
        <Image
          width={55}
          height={55}
          src="/assets/logos/email.png"
          objectFit="contain"
          alt="linked in logo"
        />
      </div>
    </div>
  );
}
