"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <div className="w-full aspect-video overflow-hidden md:mt-38 mt-20">
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        {/* Slider-1 */}
        <div className="">
          <img
            className="h-[229px] md:h-[450px] lg:h-[500px]"
            src="/assets/Slider1.jpg"
          />
        </div>
        {/* Slider-2 */}
        <div className="">
          <img
            className="h-[229px] md:h-[450px] lg:h-[500px]"
            src="/assets/Slider2.jpg"
          />
        </div>
        {/* Slider-3 */}
        <div className="">
          <img
            className="h-[229px] md:h-[450px] lg:h-[500px]"
            src="/assets/Slider3.jpg"
          />
        </div>
        {/* Slider-4 */}
        <div className="">
          <img
            className="h-[229px] md:h-[450px] lg:h-[500px]"
            src="/assets/Slider4.jpg"
          />
        </div>
        {/* Slider-5 */}
        <div className="">
          <img
            className="h-[229px] md:h-[450px] lg:h-[500px]"
            src="/assets/Slider5.jpg"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
