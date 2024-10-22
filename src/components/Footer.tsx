import React from "react";

export const Footer = () => {
  return (
    <>
      <hr id="footer" className="mt-6" />
      <div className="flex justify-center items-center py-6">
        <div className="flex justify-between items-center w-[85%]">
          <h5 className="text-[12px]"> © 2024 Copyright reserved</h5>
          <div className="flex justify-center items-center">
            <h5 className="text-[12px]">Developed by </h5>
            <a href="https://metakeys.mn/">
              <img className="w-17 h-8" src="meta2.png" alt="code" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
