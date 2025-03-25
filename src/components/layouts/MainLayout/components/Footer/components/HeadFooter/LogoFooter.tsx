import Image from "next/image";
import React from "react";

const LogoFooter = () => {
  return (
    <div className="flex items-center gap-[.625rem]">
      <div className="relative w-7 h-7">
        <Image src={"/LandingPage/iconFooter.webp"} alt="logoWhite" fill />
      </div>
      <span className="text-2xl text-white font-bold">Positivus</span>
    </div>
  );
};

export default LogoFooter;
