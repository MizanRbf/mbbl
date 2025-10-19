"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img src="/assets/logo.png" alt="logo" className="lg:w-25 md:w-20 w-15" />
      <p className="text-xl md:text-4xl lg:text-5xl font-bold text-primary font1">
        <Typewriter
          words={["Mizan's Brain Boost Lab", "Welcome to MBBL!"]}
          loop={true}
          cursor
          cursorStyle={"|"}
        />
      </p>
    </div>
  );
};

export default Logo;
