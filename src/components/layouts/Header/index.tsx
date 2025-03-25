import React from "react";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";

const Header = () => {
  return (
    <div className="pt-15 flex items-center justify-between">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
