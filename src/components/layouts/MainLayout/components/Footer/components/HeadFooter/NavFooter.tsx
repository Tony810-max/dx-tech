import Link from "next/link";
import React from "react";
import { NAV_DATA } from "../../../utils/const";

const NavFooter = () => {
  return (
    <div className="space-x-10">
      {NAV_DATA?.map((nav, index) => (
        <Link
          href={nav?.href}
          key={index}
          className="text-white underline hover:opacity-70"
        >
          {nav?.label}
        </Link>
      ))}
    </div>
  );
};

export default NavFooter;
