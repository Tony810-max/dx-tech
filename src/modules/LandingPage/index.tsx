import Header from "@/components/layouts/Header";
import React from "react";
import Banner from "./components/Banner";
import Company from "./components/Company";
import Services from "./components/Services";
import Happen from "./components/Happen";
import CaseStudies from "./components/CaseStudies";

const LandingPage = () => {
  return (
    <div className="font-sans container mx-auto">
      <Header />
      <Banner />
      <Company />
      <Services />
      <Happen />
      <CaseStudies />
    </div>
  );
};

export default LandingPage;
