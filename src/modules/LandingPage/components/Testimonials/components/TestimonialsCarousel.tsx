import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const TestimonialsCarousel = () => {
  return (
    <Carousel className="bg-secondary pt-[5.25rem] pb-[4.25rem] rounded-[2.8125rem]">
      <CarouselContent className="space-x-[3.125rem]">
        <CarouselItem className="relative max-w-[606px] z-[-1] shrink-0">
          <Image
            src={"/LandingPage/Bubble.webp"}
            alt="buble"
            width={606}
            height={266}
            priority
            unoptimized
          />
          <p className="absolute top-8 left-1/2 w-full -translate-x-1/2 text-white text-lg  z-10 px-[3.25rem] text-center">
            {`"We have been working with Positivus for the past year and have seen
            a significant increase in website traffic and leads as a result of
            their efforts. The team is professional, responsive, and truly cares
            about the success of our business. We highly recommend Positivus to
            any company looking to grow their online presence."`}
          </p>
          <div className="absolute bottom-[-20] flex flex-col z-30">
            <span className="text-white">John Smith</span>
            <span className="text-white">Marketing Director at XYZ Corp</span>
          </div>
        </CarouselItem>
        <CarouselItem className="w-[606px]">
          <Image
            src={"/LandingPage/Bubble.webp"}
            alt="buble"
            width={606}
            height={266}
            priority
            unoptimized
          />
        </CarouselItem>
        <CarouselItem className="w-[606px]">
          <Image
            src={"/LandingPage/Bubble.webp"}
            alt="buble"
            width={606}
            height={266}
            priority
            unoptimized
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default TestimonialsCarousel;
