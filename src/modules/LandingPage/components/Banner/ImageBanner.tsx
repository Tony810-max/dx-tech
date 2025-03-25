import Image from "next/image";
import React from "react";

const ImageBanner = () => {
  return (
    <div className="flex-1 relative w-[37.5rem] h-[32.1875rem]">
      <Image
        src={"/LandingPage/banner.webp"}
        alt="banner"
        fill
        priority
        unoptimized
      />
    </div>
  );
};

export default ImageBanner;
