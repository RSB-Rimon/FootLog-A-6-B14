import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
 <footer className="mt-7 border-t border-[#202228] bg-[#0C0D10]">
  <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-4 text-sm text-[#77787d] sm:flex-row">
    
    <div className="flex items-center gap-2">
      <Image
        src={logo}
        alt="FitLog logo"
        width={30}
        height={30}
      />
      <a className="text-xl font-bold text-white">
        FITLOG
      </a>
    </div>

    <p className="text-center sm:text-right">
      © 2026 FitLog — Workout Library. Train hard, log honest.
    </p>

  </div>
</footer> 
  );
};

export default Footer;
