import React from "react";

export const Hero = () => {
  return (
    <div className="flex justify-center items-center py-6">
      <div className="flex  justify-between w-[85%]">
        <img
          id="hero"
          className="w-full rounded-3xl"
          src="https://scontent.fuln6-2.fna.fbcdn.net/v/t39.30808-6/436316577_122162919626062624_1898481491216921094_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=5FIf__zeTFcQ7kNvgHXH7-6&_nc_zt=23&_nc_ht=scontent.fuln6-2.fna&_nc_gid=AOBbvyhoi1iVXqFKz7TOmdh&oh=00_AYBRWskit2WCZOKrzQ7KLaxMAsg3H_Oj86hAXiNvIZpVAg&oe=6717EA33"
          alt="Food"
        />
        <div className="absolute pl-[5%] pt-[5%] h-full ">
          <h1
            id=""
            className=" text-white font-bold text-[16px] sm:text-[24px] md:text-[32px]"
          >
            Fuel Your Body <br></br> With Healthy <br></br>Choices
          </h1>
          <button className="text-white py-2 px-4 bg-green-500 rounded-xl ">
            Explore the menu
          </button>
        </div>
      </div>
    </div>
  );
};
