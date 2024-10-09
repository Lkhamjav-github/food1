import React from "react";

export const Footer = () => {
  return (
    <>
      <hr className="my-[100px]" />
      <div className="flex justify-center items-center py-6">
        <div className="flex justify-between w-[80%] mb-[100px]">
          <div className="">
            <h1>Logo</h1>
            <h2>(+976)99999999</h2>
            <h2>some@gmail.com</h2>
          </div>
          <div>
            <h1>Our Office</h1>
            <h2>
              #404, 4th floor, Park Place, 1st khoroo, Sukhbaatar district, UB
              14241, Mongolia
            </h2>
            <div>
              <a href="">Fb</a>
              <a href="">Fb</a>
              <a href="">Fb</a>
              <a href="">Fb</a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-center items-center py-6">
        <div className="flex justify-center w-[80%]">
          <h2> © 2024 Copyright reserved</h2>
        </div>
      </div>
    </>
  );
};
