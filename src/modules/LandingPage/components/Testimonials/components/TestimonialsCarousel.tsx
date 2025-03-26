"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Sparkle } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/modules/LandingPage/utils/const";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { EmblaCarouselType } from "embla-carousel";

export interface ITestimonial {
  quote: string;
  author: string;
  position: string;
}

const TestimonialsCarousel = () => {
  const [api, setApi] = useState<EmblaCarouselType | undefined>(undefined);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);
  return (
    <Carousel
      setApi={setApi}
      className="w-full bg-secondary pt-[5.25rem] pb-[4.25rem] rounded-[2.8125rem]"
    >
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
      <div className="flex items-center justify-center mt-16 w-full">
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => api?.scrollPrev()}
            className={cn(
              "text-gray-400 focus:outline-none  bg-transparent w-6 h-6 ",
              { "cursor-pointer hover:opacity-70": api?.canScrollPrev() }
            )}
            aria-label="Previous slide"
            // disabled={!api?.canScrollPrev}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19L8 12L15 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex gap-4">
            {TESTIMONIALS_DATA.map((_, index) => (
              <Button
                variant={"default"}
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "w-6 h-6 rounded-full p-0 bg-transparent hover:bg-transparent hover:opacity-70"
                )}
                aria-label={`Go to slide ${index + 1}`}
              >
                {current === index ? (
                  <Sparkle
                    className="rotate-[38deg]"
                    color="var(--primary)"
                    fill="var(--primary)"
                    size={28}
                    strokeWidth={1}
                  />
                ) : (
                  <Sparkle
                    className="rotate-[38deg]"
                    color="white"
                    fill="white"
                    size={28}
                    strokeWidth={1}
                  />
                )}
              </Button>
            ))}
          </div>

          <button
            onClick={() => api?.scrollNext()}
            className={cn(
              "text-gray-400 focus:outline-none  bg-transparent w-6 h-6",
              { "cursor-pointer hover:opacity-70": api?.canScrollNext() }
            )}
            aria-label="Next slide"
            disabled={!api?.canScrollNext()}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5L16 12L9 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </Carousel>
  );
};

export default TestimonialsCarousel;
