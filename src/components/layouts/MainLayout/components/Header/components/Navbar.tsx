import Link from "next/link";
import React from "react";
import { NAV_DATA } from "../../utils/const";

const Navbar = () => {
  return (
    <div className="flex gap-10 items-center">
      {NAV_DATA?.map((nav, index) => (
        <Link
          key={index}
          href={nav?.href}
          className="hover:cursor-pointer hover:opacity-70"
        >
          {nav?.label}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
