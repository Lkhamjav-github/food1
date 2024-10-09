//Header.tsx
import React from "react";

type HeaderProps = {
  scrollToHero: () => void;
  scrollToProduct: () => void;
  scrollToContact: () => void;
  scrollToFooter: () => void;
};
export const Header: React.FC<HeaderProps> = ({
  scrollToHero,
  scrollToProduct,
  scrollToContact,
  scrollToFooter,
}) => {
  return (
    <div className="flex justify-center items-center py-6">
      <div className="flex justify-between w-[80%]">
        <a href="#" onClick={scrollToHero}>
          Home
        </a>
        <a href="#" onClick={scrollToProduct}>
          Our Products
        </a>
        <img className="w-18 h-16" src="../logo.png" alt="" />
        <a href="#" onClick={scrollToContact}>
          Home
        </a>
        <a href="#" onClick={scrollToFooter}>
          Contact us
        </a>
      </div>
    </div>
  );
};
