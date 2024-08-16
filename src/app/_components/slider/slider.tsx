"use client";
import { SliderData } from "@/data/slider-data";
import { Button } from "../button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Slider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="h-[calc(100vh-180px)] relative overflow-hidden">
      <div
        className="w-full h-full transition-all duration-700 ease-in-out"
        style={{ transform: `translateY(-${current * 100}%)` }}
      >
        {SliderData.map((slider) => (
          <div
            className="w-full md:w-screen h-full flex flex-col gap-4 lg:gap-16 xl:flex-row"
            key={`slider-image-${slider.id}`}
          >
            <div className="w-full xl:w-1/2 flex flex-col items-center justify-center gap-8 text-center h-1/2 xl:h-full">
              <h4 className="font-semibold text-xl lg:text-2xl xl:text-3xl">
                {slider.description}
              </h4>
              <h2 className="font-bold xl:text-7xl text-4xl ">
                {slider.title}
              </h2>
              <Link href={slider.url}>
                <Button size="large">Shop Now</Button>
              </Link>
            </div>
            <div className="xl:w-1/2 relative h-1/2 xl:h-full">
              <Image
                src={slider.image}
                alt={slider.title}
                fill
                sizes="100%"
                className="object-cover object-center"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-4 flex gap-4">
        {SliderData.map((slider, index) => (
          <div
            key={`circle-${slider.id}`}
            className={`h-3 w-3 ring-1 ring-base-50 rounded-full cursor-pointer flex items-center justify-center ${
              current === index ? "scale-105" : ""
            }`}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="h-[6px] w-[6px] bg-base-100 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
