import React from "react";

import LogoFooter from "./LogoFooter";
import NavFooter from "./NavFooter";
import SocialFooter from "./SocialFooter";

const HeadFooter = () => {
  return (
    <div className="flex justify-between">
      <LogoFooter />
      <NavFooter />
      <SocialFooter />
    </div>
  );
};

export default HeadFooter;
