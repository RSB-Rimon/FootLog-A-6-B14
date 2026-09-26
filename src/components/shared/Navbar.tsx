"use client";

import Image from "next/image";
import React, { useContext } from "react";
import NavLogo from "@/assets/logo.png";
import Link from "next/link";
import { WorkOutContext } from "@/context/WorkOutContext";

const Navbar = () => {
  const { todayPlan, saveWorkOut } = useContext(WorkOutContext);

  // const { todayPlan, savedWorkOut } = useContext(WorkOutContext);

  const NavLinks = (
    <>
      <Link href="/">Workouts</Link>
      <Link href="/my-plan">My Plan</Link>
    </>
  );

  return (
    <div className="bg-[#0C0D10] text-white">
      <div className="navbar container mx-auto shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-5"
            >
              {NavLinks}
            </ul>
          </div>

          <div className="flex items-center gap-2">
            <Image src={NavLogo} alt="FITLOG Logo" width={30} height={30} />

            <Link href="/" className="text-white text-xl font-bold">
              FITLOG
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{NavLinks}</ul>
        </div>

        {/* Counters */}
        {/* Counters */}
        <div className="navbar-end flex items-center gap-6 text-sm">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            <span>Plan</span>
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#ccff00] text-black text-xs font-bold">
              {todayPlan.length}
            </span>
          </Link>

          <div className="flex items-center gap-2 text-gray-400">
            <span>Saved</span>
            <span className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 text-xs">
              {saveWorkOut.length}
            </span>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Navbar;
