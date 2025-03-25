import Image from "next/image";
import React from "react";

const SocialFooter = () => {
  return (
    <div className="flex gap-5">
      {Array.from({ length: 3 }, (_, index) => (
        <div key={index} className="relative w-[1.875rem] h-[1.875rem]">
          <Image
            src={`/LandingPage/Social${index + 1}.webp`}
            alt="social"
            fill
          />
        </div>
      ))}
    </div>
  );
};

export default SocialFooter;
