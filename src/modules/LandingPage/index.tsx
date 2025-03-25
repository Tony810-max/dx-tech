import React from "react";
import Banner from "./components/Banner";
import Company from "./components/Company";
import Services from "./components/Services";
import Happen from "./components/Happen";
import CaseStudies from "./components/CaseStudies";
import OurWorking from "./components/OurWorking";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import ContactUS from "./components/ContactUS";

const LandingPage = () => {
  return (
    <div className="font-sans">
      <Banner />
      <Company />
      <Services />
      <Happen />
      <CaseStudies />
      <OurWorking />
      <Team />
      <Testimonials />
      <ContactUS />
    </div>
  );
};

export default LandingPage;
