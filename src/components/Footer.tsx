import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
   <footer className="bg-[#0C0D10] border-t border-[#202228] mt-7">
     <div className="flex justify-between container mx-auto shadow-2xl py-4  text-[#77787d] text-sm">
      <div className="flex items-center  gap-2  ">
        <Image src={logo} alt="Picture of the author" width={30} height={30} />
        <a className=" text-white text-xl font-bold">FITLOG</a>
      </div>
      <p> © 2026 FitLog — Workout Library. Train hard, log honest.</p>
    </div>
   </footer>
  );
};

export default Footer;
