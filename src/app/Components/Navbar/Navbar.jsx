import React from "react";
import Logo from "./Logo";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="px-4 py-2 flex justify-between items-center max-w-[1600px] mx-auto">
      <Logo></Logo>
      <input
        type="text"
        className="border border-gray-200 py-3 rounded-sm pl-3 shadow-sm outline-secondary"
        placeholder="Search"
      />
      <div className="flex flex-col items-center justify-center">
        <CgProfile size={30} className="text-gray-500" />
        <h2 className="text-gray-500">Profile</h2>
      </div>
    </div>
  );
};

export default Navbar;
