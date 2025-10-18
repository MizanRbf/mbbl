import React from "react";
import Logo from "./Logo";
import { CgProfile } from "react-icons/cg";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="px-4 py-2 flex justify-between items-center max-w-[1600px] mx-auto">
      <IoMenuSharp className="md:hidden text-4xl text-gray-500 hover:text-secondary cursor-pointer" />
      <Logo></Logo>
      <input
        type="text"
        className="border border-gray-200 py-3 rounded-sm pl-3 shadow-sm outline-secondary hidden lg:block"
        placeholder="Search"
      />
      <div className="flex flex-col items-center justify-center">
        <CgProfile
          size={30}
          className="text-gray-500 cursor-pointer hover:text-secondary"
        />
        <h2 className="text-gray-500 hidden md:block cursor-pointer hover:text-secondary">
          Profile
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
