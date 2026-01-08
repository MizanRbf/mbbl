import React from "react";
import Logo from "../Navbar/Logo";
import LogoFooter from "./LogoFooter";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-gray-200">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <LogoFooter></LogoFooter>
          </a>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase ">Product</h3>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase ">Company</h3>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase ">Developers</h3>
          </div>

          {/* Social Media */}
          <SocialMedia></SocialMedia>
        </div>
      </div>
      <div className="py-6 text-sm text-center">
        Copyright © 2025 - All rights reserved by{" "}
        <span className="text-primary font-bold">MBBL</span>.
      </div>
    </footer>
  );
};

export default Footer;
