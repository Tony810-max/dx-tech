import Heading from "@/components/Heading";
import React from "react";
import TestimonialsCarousel from "./components/TestimonialsCarousel";

const Testimonials = () => {
  return (
    <div className="pt-[6.25rem] space-y-20">
      <Heading
        title="Testimonials"
        description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      />
      <TestimonialsCarousel />
    </div>
  );
};

export default Testimonials;
