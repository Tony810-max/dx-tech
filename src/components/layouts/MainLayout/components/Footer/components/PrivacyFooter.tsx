import { ROUTES } from "@/lib/routes";
import Link from "next/link";
import React from "react";

const PrivacyFooter = () => {
  return (
    <div className="flex gap-10">
      <span className="text-lg text-white">
        © 2023 Positivus. All Rights Reserved.
      </span>
      <Link href={ROUTES?.PRIVARCY} className="text-lg text-white underline">
        Privacy Policy
      </Link>
    </div>
  );
};

export default PrivacyFooter;
