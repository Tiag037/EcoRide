"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function CarouselPictures() {
  return (
    <Carousel
      orientation="vertical"
      className=" "
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent className="-mt-1 h-[500px]">
        <CarouselItem className="max-w-lg md:basis-1/2 lg:basis-1/3">
          <img src="/img/photo1.jpg" />
        </CarouselItem>
        <CarouselItem className="max-w-lg md:basis-1/2 lg:basis-1/3">
          <img src="/img/photo2.jpg" />
        </CarouselItem>
        <CarouselItem className="max-w-lg md:basis-1/2 lg:basis-1/3">
          <img src="/img/photo3.jpg" />
        </CarouselItem>
        <CarouselItem className="max-w-lg md:basis-1/2 lg:basis-1/3">
          <img src="/img/photo4.jpg" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
