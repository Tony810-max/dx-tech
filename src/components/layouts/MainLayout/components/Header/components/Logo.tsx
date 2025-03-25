import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-9 h-9">
        <Image src={"/LandingPage/logo.webp"} alt="logo" fill />
      </div>
      <span className="text-3xl font-bold">Positivus</span>
    </div>
  );
};

export default Logo;
