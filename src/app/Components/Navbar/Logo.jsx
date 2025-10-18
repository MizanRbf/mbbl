import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img src="/assets/logo.png" alt="logo" className="lg:w-25 md:w-20 w-15" />
      <p className="text-xl md:text-4xl lg:text-5xl font-bold text-primary font1">
        Mizan's Brain Boost Lab
      </p>
    </div>
  );
};

export default Logo;
