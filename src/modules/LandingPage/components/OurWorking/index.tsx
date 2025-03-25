import Heading from "@/components/Heading";
import React from "react";
import { ACCORDION_DATA } from "../../utils/const";
import OurWorkingAccordion from "./OurWorkingAccordion";

const OurWorking = () => {
  return (
    <div className="pt-[8.75rem] space-y-20">
      <Heading
        title="Our Working Process"
        description="Step-by-Step Guide to Achieving Your Business Goals"
      />
      <div className="space-y-[1.875rem]">
        {ACCORDION_DATA?.map((accordion) => (
          <OurWorkingAccordion
            number={accordion?.number}
            description={accordion?.description}
            title={accordion?.title}
            key={accordion?.number}
          />
        ))}
      </div>
    </div>
  );
};

export default OurWorking;
