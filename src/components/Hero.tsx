import React from "react";

export const Hero = () => {
  return (
    <div className="flex justify-center items-center py-6">
      <div className="flex justify-between w-[85%]">
        <img
          id="hero"
          className="w-full rounded-3xl"
          src="https://scontent.fuln6-2.fna.fbcdn.net/v/t39.30808-6/436316577_122162919626062624_1898481491216921094_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=IeHKr7Gv24YQ7kNvgHqR-98&_nc_ht=scontent.fuln6-2.fna&_nc_gid=APAJm-0-zQWlT7AwMlmArB8&oh=00_AYDyi7JA0lE1cJd8I8A7IxHOWCKyIXWfp5QqttC0nHLqdA&oe=670C0CB3"
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
