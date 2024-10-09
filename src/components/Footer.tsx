import React from "react";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
export const Footer = () => {
  return (
    <>
      <hr className="my-[100px]" />
      <div className="flex justify-center items-center py-6">
        <div className="flex w-[85%] mb-[100px]">
          <div className="w-[50%]">
            <h1>Logo</h1>
            <h2>(976)8008 2819</h2>
            <h2>Goolife@wholesomefoods.mn</h2>
          </div>
          <div className="flex flex-col justify-start">
            <h1>Our Office</h1>
            <h2>ХУД, Ulaanbaatar, Mongolia, 107060</h2>
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
