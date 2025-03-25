import React from "react";

import HeadFooter from "./components/HeadFooter";
import ContactFooter from "./components/ContactFooter";
import { Separator } from "@/components/ui/separator";
import PrivacyFooter from "./components/PrivacyFooter";

const Footer = () => {
  return (
    <div className="container space-y-[3.125rem] mx-auto pt-[3.4375rem] px-15 pb-[3.125rem] rounded-tl-[2.8125rem] rounded-tr-[2.8125rem] bg-secondary">
      <div>
        <HeadFooter />
        <ContactFooter />
      </div>
      <Separator />
      <PrivacyFooter />
    </div>
  );
};

export default Footer;
