import React from "react";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="pt-15 container mx-auto flex items-center justify-between">
      <Logo />

      <div className="flex gap-10">
        <Navbar />
        <Button variant={"outline"} className="min-w-[14.4375rem]">
          Request a quote
        </Button>
      </div>
    </div>
  );
};

export default Header;
