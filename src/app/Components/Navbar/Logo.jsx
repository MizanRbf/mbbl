"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Logo = () => {
  return (
    <div className="flex items-center">
      {/* logo */}
      <img src="/assets/logo.png" alt="logo" className="lg:w-22 md:w-20 w-15" />
      {/* Channel name */}
      <div className="text-xl md:text-4xl lg:text-5xl font-bold text-primary font1">
        <p className="font-bold text-lg md:text-2xl lg:text-5xl">
          Mizan's Brain Boost Lab
        </p>
      </div>
    </div>
  );
};

export default Logo;
