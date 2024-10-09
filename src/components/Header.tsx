import React from "react";

export const Header = () => {
  return (
    <div className="flex justify-center items-center py-6">
      <div className="flex justify-between w-[80%]">
        <a href="Home">Home</a>
        <a href="Home">Our Products</a>
        <img className="w-18 h-16" src="../logo.png" alt="" />
        <a href="Home">Home</a>
        <a href="Home">Contact us</a>
      </div>
    </div>
  );
};
