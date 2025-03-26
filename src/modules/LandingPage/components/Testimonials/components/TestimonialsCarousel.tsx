import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/modules/LandingPage/utils/const";

export interface ITestimonial {
  quote: string;
  author: string;
  position: string;
}

const TestimonialsCarousel = () => {
  return (
    <Carousel className="w-full bg-secondary pt-[5.25rem] pb-[4.25rem] rounded-[2.8125rem]">
      <CarouselContent className="space-x-[3.125rem]">
        {TESTIMONIALS_DATA?.map((testimonials, index) => (
          <CarouselItem className=" basis-1/2 pl-4" key={index}>
            <div className="relative">
              <div className="bg-[#111827] border border-primary rounded-3xl p-6 md:p-8 relative">
                <p className="text-white text-base md:text-lg">
                  {testimonials?.quote}
                </p>
                <div className="absolute bottom-[-1.625rem] left-12 w-8 h-8 overflow-hidden">
                  <div className="absolute border w-8 h-8 border-l border-r border-primary bg-[#111827] rotate-45 translate-y-[-50%]"></div>
                </div>
              </div>
              <div className="ml-12 mt-8 text-left w-fit">
                <h3 className="text-primary font-semibold text-lg">
                  {testimonials?.author}
                </h3>
                <p className="text-white text-sm">{testimonials?.position}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center justify-center mt-12 gap-2">
        <CarouselPrevious className="static bg-transparent border-none hover:bg-transparent hover:opacity-80 text-gray-400">
          <ChevronLeft className="h-52 w-52 shrink-0" />
        </CarouselPrevious>
        <CarouselNext className="static bg-transparent border-none hover:bg-transparent hover:opacity-80 text-gray-400">
          <ChevronRight className="h-52 w-52" />
        </CarouselNext>
      </div>
    </Carousel>
  );
};

export default TestimonialsCarousel;
