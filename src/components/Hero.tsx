import React from "react";

export const Hero = () => {
  return (
    <div className="flex justify-center items-center pb-6">
      <div className="flex justify-between w-[100%] h-[100vh]">
        <div className="items-center flex w-full h-full flex-col bg-[url('/goolifelores1.avif')] bg-cover bg-bottom">
          <img className="w-[120px] h-24 mt-4" src="../logo.png" alt="logo" />
          <h1 className="text-green pt-3 font-geeks font-bold text-[16px] sm:text-[24px] md:text-[48px]">
            Good food, Good mood
          </h1>
          <div className="w-[90%] h-full flex flex-col justify-end items-end pb-12">
            <h2 className="text-[#283995] font-firesans  text-[16px] font-bold ">
              hello@goolifelores.mn
            </h2>
            <h2 className="text-[#283995] font-firesans  text-[16px] font-bold ">
              +976 77102222
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
