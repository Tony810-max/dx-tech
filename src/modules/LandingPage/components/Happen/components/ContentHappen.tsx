import { Button } from "@/components/ui/button";
import React from "react";

const ContentHappen = () => {
  return (
    <div className="p-[3.75rem] flex flex-col gap-[1.625rem]">
      <span className="text-3xl font-medium">Let’s make things happen</span>
      <span className="text-lg font-normal max-w-[31.25rem]">
        Contact us today to learn more about how our digital marketing services
        can help your business grow and succeed online.
      </span>
      <Button variant={"secondary"} className="w-fit ">
        Get your free proposal
      </Button>
    </div>
  );
};

export default ContentHappen;
