import Link from "next/link";
import React from "react";
import { NAV_DATA } from "../utils/const";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="flex gap-10 items-center">
      {NAV_DATA?.map((nav, index) => (
        <Link
          href={nav?.href}
          key={index}
          className="hover:cursor-pointer hover:opacity-70"
        >
          {nav?.label}
        </Link>
      ))}
      <Button
        variant={"outline"}
        className="px-[2.148rem] py-[2.0556rem] text-xl font-normal hover:cursor-pointer hover:bg-primary border-[#000] rounded-[14px]"
      >
        Request a quote
      </Button>
    </div>
  );
};

export default Navbar;
