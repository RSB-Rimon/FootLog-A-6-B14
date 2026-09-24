import Image from "next/image";
import React from "react";
import BannerImage from "@/assets/banner.png";

const Banner = () => {
  return (
  <div className="container mx-auto mt-8 px-4">
  <div className="bg-[#15171c] rounded-2xl px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-8 overflow-hidden">

    {/* text part */}
    <div className="max-w-xl">
      <span className="text-[#c2f800] text-xs font-bold">
        WORKOUT LIBRARY
      </span>

      <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-none mt-3">
        TRAIN WITH INTENT. LOG
        <br />
        EVERY SET.
      </h1>

      <p className="text-gray-400 text-sm leading-5 mt-4 max-w-lg">
        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
        into today's plan, and watch the week's work add up.
      </p>

      <button className="bg-[#c2f800] text-black text-xs font-bold px-5 py-2.5 rounded-md mt-5 hover:bg-[#b4e900] transition">
        BROWSE WORKOUTS
      </button>
    </div>

    {/* image part */}
    <div className="flex justify-center items-center">
      <Image
        src={BannerImage}
        alt="Workout"
        width={300}
        height={300}
        className="w-[220px] md:w-[280px]"
      />
    </div>

  </div>
</div>
  );
};

export default Banner;
