import Image from "next/image";
import React from "react";

const ImageHappen = () => {
  return (
    <Image
      src={"/LandingPage/happen.webp"}
      alt="happen"
      width={494}
      height={394}
      priority
      unoptimized
      className="absolute right-0 -top-5"
    />
  );
};

export default ImageHappen;
