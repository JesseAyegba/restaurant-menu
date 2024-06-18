import React from "react";
import BrandLogo from "../BrandLogo/BrandLogo";

const Navbar = () => {
  return (
    <nav className="h-[6rem] px-[2rem]">
      <div className="max-w-[40rem] mx-auto h-full flex items-center">
        <BrandLogo />
      </div>
    </nav>
  );
};

export default Navbar;
