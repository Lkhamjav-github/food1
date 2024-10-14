import React from "react";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
export const Footer = () => {
  return (
    <>
      <hr id="footer" className="my-[100px]" />
      <div className="flex justify-center  items-center py-6">
        <div className="flex flex-col md:flex-row w-[85%] mb-[100px]">
          <div className="w-[50%]">
            <div className="flex pb-2">
              <img className="w-20 h-18" src="../leaf.png" alt="logo" />
              <h1 id="cinzel" className="font-cinzel text-4xl text-[#283995]">
                GOOLIFE
              </h1>
            </div>
            <h2 className="py-4 font-sans text-[16px]">(976)8008 2819</h2>
            <h2 className="font-sans text-[16px]">Goolife@wholesomefoods.mn</h2>
          </div>
          <div className="flex flex-col justify-start">
            <h1 className="text-4xl">Our Office</h1>
            <h2 className="py-4 font-sans text-[16px]">
              ХУД, Ulaanbaatar, Mongolia, 107060
            </h2>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61551878740890"
                target="blank"
              >
                <Facebook className="w-8 h-8" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61551878740890"
                target="blank"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61551878740890"
                target="blank"
              >
                <LinkedInIcon className="w-8 h-8" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61551878740890"
                target="blank"
              >
                <XIcon className="w-8 h-8" />
              </a>
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
