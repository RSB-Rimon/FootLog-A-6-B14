import React from "react";
import { IWorkout } from "@/types/types";
import Image from "next/image";

interface WorkoutCardProps {
  workout: IWorkout;
}

const MyPlanPagesCard = ({ workout }: WorkoutCardProps) => {
  return (
 <div className="w-full rounded-xl border border-[#242a33] bg-[#15191f] px-4 py-3">
  <div className="flex w-full items-center gap-4">

    {/* Image */}
    <div className="h-12 w-20 shrink-0 overflow-hidden rounded-md">
      <Image
        src={workout.image}
        alt={workout.name}
        width={80}
        height={48}
        className="h-full w-full object-cover"
      />
    </div>

    {/* Info */}
    <div className="min-w-0 flex-1">
      <h3 className="text-xs font-bold uppercase text-white">
        {workout.name}
      </h3>

      <p className="text-[9px] text-gray-500">
        {workout.equipment || "Bodyweight"}
      </p>

      <div className="mt-1 flex gap-4 text-[9px] text-gray-400">
        <span>
          <span className="text-[#c2f800]">◷</span>{" "}
          {workout.duration} min
        </span>

        <span>
          <span className="text-[#c2f800]">▣</span>{" "}
          {workout.caloriesBurned} kcal
        </span>

        <span>
          <span className="text-[#c2f800]">★</span>{" "}
          {workout.rating}
        </span>
      </div>
    </div>

    {/* Buttons */}
    <div className="flex shrink-0 items-center gap-2">
      <button className="rounded-full border border-[#303640] px-4 py-2 text-[9px] text-gray-300">
        View Details
      </button>

      <button className="rounded-full bg-[#c2f800] px-5 py-2 text-[9px] font-bold text-black">
        ✓ Mark as Done
      </button>

      <button className="px-1 text-gray-600 hover:text-white">
        ×
      </button>
    </div>

  </div>
</div>
  );
};

export default MyPlanPagesCard;
