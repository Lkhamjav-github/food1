import React from "react";

export const Hero = () => {
  return (
    <div className="flex justify-center items-center py-6">
      <div className="flex justify-between w-[80%]">
        <img
          id="hero"
          className="w-full rounded-3xl"
          src="https://cdn.cancercenter.com/-/media/ctca/images/others/blogs/2019/06-june/02-blog-healthy-food-l.jpg"
          alt="Food"
        />
        <div className="absolute pl-[32px] pt-[100px] h-full ">
          <h1 id="" className=" text-white font-bold text-[48px]">
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
