import Heading from "@/components/Heading";

import React from "react";
import CaseStudiesCard from "./CaseStudiesCard";

const CaseStudies = () => {
  return (
    <div className="pt-[8.75rem] space-y-20">
      <Heading
        title="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />
      <div className="py-[4.375rem] px-[3.75rem] flex bg-secondary rounded-[2.8125rem]">
        <CaseStudiesCard className="pr-16" />
        <CaseStudiesCard className=" border border-white border-t-0 border-b-0 px-16" />
        <CaseStudiesCard className="pl-16" />
      </div>
    </div>
  );
};

export default CaseStudies;
