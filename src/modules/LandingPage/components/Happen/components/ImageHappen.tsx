import Image from "next/image";
import React from "react";

const ImageHappen = () => {
  return (
    <div className="relative w-[30.875rem] h-[24.625rem]">
      <Image
        src={"/LandingPage/happen.webp"}
        alt="happen"
        fill
        priority
        unoptimized
      />
    </div>
  );
};

export default ImageHappen;
