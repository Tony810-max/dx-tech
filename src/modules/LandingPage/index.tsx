import Header from "@/components/layouts/Header";
import React from "react";
import Banner from "./components/Banner";
import Company from "./components/Company";
import Services from "./components/Services";

const LandingPage = () => {
  return (
    <div className="font-sans container mx-auto">
      <Header />
      <Banner />
      <Company />
      <Services />
    </div>
  );
};

export default LandingPage;
