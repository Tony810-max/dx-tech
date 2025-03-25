import Heading from "@/components/Heading";
import Image from "next/image";
import React from "react";
import FormContact from "./components/FormContact";

const ContactUS = () => {
  return (
    <div className="py-[8.75rem] space-y-20">
      <Heading
        title="Contact Us"
        description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
      />
      <div className="bg-third relative overflow-hidden h-[40.5rem]">
        <FormContact />
        <Image
          src={"/LandingPage/contactUsImg.webp"}
          alt="contact us"
          width={692}
          height={648}
          priority
          unoptimized
          className="absolute right-0 translate-x-1/2"
        />
      </div>
    </div>
  );
};

export default ContactUS;
