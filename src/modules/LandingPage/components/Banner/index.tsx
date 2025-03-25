import React from "react";
import ImageBanner from "./ImageBanner";
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div className="pt-[4.375rem] flex justify-between">
      <div className="flex-1 flex flex-col gap-9">
        <span className="font-medium text-6xl max-w-[33.1875rem]">
          Navigating the digital landscape for success
        </span>
        <span className="max-w-[31.125rem]">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </span>
        <Button variant={"secondary"} className="w-fit min-w-[16.5rem]">
          Book a consultation
        </Button>
      </div>
      <ImageBanner />
    </div>
  );
};

export default Banner;
