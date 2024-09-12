"use client";
import { Carousel } from "flowbite-react";
import Image from "next/image";
function CarouselFlowBite() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 bg-black rounded-xl">
      <Carousel>
        <Image
          src="/img/carousel-1.jpg"
          alt="Carousel Image"
          width={1000}
          height={1000}
        />
        <Image
          src="/img/carousel-2.png"
          alt="Carousel Image"
          width={1000}
          height={1000}
        />
      </Carousel>
    </div>
  );
}

export default CarouselFlowBite;
