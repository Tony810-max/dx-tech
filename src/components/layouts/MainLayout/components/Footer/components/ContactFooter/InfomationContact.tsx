import React from "react";

const InfomationContact = () => {
  return (
    <div className="space-y-7 max-w-[20.75rem]">
      <span className="block rounded-[.4375rem] bg-primary w-fit text-black font-medium text-xl px-[.4375rem]">
        Contact us:
      </span>
      <div className="flex flex-col gap-5">
        <span className="text-white">Email: info@positivus.com</span>
        <span className="text-white">Phone: 555-567-8901</span>
        <span className="text-white">
          Address: 1234 Main St Moonstone City, Stardust State 12345
        </span>
      </div>
    </div>
  );
};

export default InfomationContact;
