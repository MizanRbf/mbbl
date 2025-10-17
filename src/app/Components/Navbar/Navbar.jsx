import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="m-4 p-2 flex justify-between items-center">
      <Logo></Logo>
      <input type="text" className="border rounded-sm" />
      <h2>Profile</h2>
    </div>
  );
};

export default Navbar;
