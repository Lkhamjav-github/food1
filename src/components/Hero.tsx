import React from "react";

export const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-between w-[100%] h-[100vh]">
        <img
          id="hero"
          className="w-full"
          src="./goolifelores1.avif"
          alt="Food"
        />
        <div className="absolute mt-[3%] items-center flex w-full h-full flex-col">
          <img className="w-[140px] h-26" src="../logo.png" alt="logo" />
          <h1 className="text-[#283995] pt-3 font-geeks font-bold text-[16px] sm:text-[24px] md:text-[48px]">
            Good food, Good mood
          </h1>
          <div className="w-[85%] h-full flex justify-between items-end pb-16 ">
            <h2 className="text-[#283995] font-firesans  text-[24px] font-bold ">
              hello@goolifelores.mn
            </h2>
            <h2 className="text-[#283995] font-firesans  text-[24px] font-bold ">
              +976 77102222
            </h2>
            {/* <img className="w-[256px]" src="./fb.png" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
