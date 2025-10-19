import React from "react";

const LogoFooter = () => {
  return (
    <div className="flex items-center">
      <img src="/assets/logo.png" alt="logo" className="lg:w-25 md:w-20 w-15" />
      <p className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold  font1 hidden lg:block text-primary">
        MBBL
      </p>
      <p className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold  font1 lg:hidden text-primary">
        Mizan's Brain Boost Lab
      </p>
    </div>
  );
};

export default LogoFooter;
