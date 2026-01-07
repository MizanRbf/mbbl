import React from "react";
import { FaHeadphones } from "react-icons/fa";

const Menubar = () => {
  return (
    <div className="bg-primary lg:mt-30 md:mt-25 md:fixed lg:-top-4 md:-top-1 right-0 left-0 z-50">
      {/* For Large Device */}
      <div className=" justify-between  text-white font-semibold text-2xl px-4 py-3 gap-3 max-w-[1600px] mx-auto hidden md:flex">
        <ul className="flex justify-center w-full lg:gap-20 md:gap-10 *:cursor-pointer *:hover:underline">
          <li> Home</li>
          <li>About</li>
          <li>Classes</li>
          <li>Books</li>
          <li>Blogs</li>
        </ul>
        <div className="flex items-center gap-2">
          <FaHeadphones />
          <p>01319687088</p>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
