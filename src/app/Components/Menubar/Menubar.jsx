import React from "react";
import { FaHeadphones } from "react-icons/fa";

const Menubar = () => {
  return (
    <div className="bg-secondary">
      {/* For Large Device */}
      <div className=" justify-between  text-white font-bold text-2xl px-4 py-3 gap-3 max-w-[1600px] mx-auto hidden md:flex">
        <div className="flex justify-center w-full gap-8">
          <p>Home</p>
          <p>About</p>
          <p>Classes</p>
          <p>Books</p>
          <p>Blogs</p>
        </div>
        <div className="flex items-center gap-2">
          <FaHeadphones />
          <p>01319687088</p>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
