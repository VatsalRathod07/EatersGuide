import React from "react";

const Navbar = () => {
  const isMobile = window.innerWidth <= 768; // Define the mobile breakpoint as per your requirements

  return (
    <div className="navbar flex justify-between p-[3rem]">
      <div className="logo">
        <h1 className="logo font-extrabold text-DeepBlue text-2xl">Eater's <span className="font-bold text-black">Guide</span></h1>
      </div>
      {!isMobile && (
        <div className="menu flex gap-8">
          <li className="menuList font-medium text-DarkGray hover:text-DeepBlue">Restaurants</li>
          <li className="menuList font-medium text-DarkGray hover:text-DeepBlue">About</li>
          <li className="menuList font-medium text-DarkGray hover:text-DeepBlue">Contact</li>
        </div>
      )}
    </div>
  );
};

export default Navbar;
