import React from "react";
import FormSubscribe from "./FormSubscribe";
import InfomationContact from "./InfomationContact";

const ContactFooter = () => {
  return (
    <div className="pt-[4.125rem] flex justify-between">
      <InfomationContact />
      <FormSubscribe />
    </div>
  );
};

export default ContactFooter;
