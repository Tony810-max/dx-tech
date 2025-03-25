import Card from "@/components/Card";
import Heading from "@/components/Heading";

import React from "react";
import { CARD_DATA } from "../../utils/const";

const Services = () => {
  return (
    <div className="pt-[4.375rem] pb-20 space-y-20">
      <Heading
        title="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
      <div className="grid grid-cols-2 gap-10">
        {CARD_DATA?.map(({ ...props }, index) => (
          <Card key={index} {...props} />
        ))}
      </div>
    </div>
  );
};

export default Services;
