import Image from "next/image";
import React from "react";

const Company = () => {
  return (
    <div className="flex gap-[5.75rem] py-[4.375rem]">
      {Array.from({ length: 6 }, (_, index) => (
        <div className="relative w-32 h-12" key={index}>
          <Image
            src={`/LandingPage/company${index + 1}.webp`}
            alt="company"
            fill
            unoptimized
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default Company;
