import React from "react";
import { IWorkout } from "@/types/types";
import Image from "next/image";

interface WorkoutCardProps {
  workout: IWorkout;
}

const MyPlanPagesCard = ({ workout }: WorkoutCardProps) => {
  return (
 <div className="w-full rounded-xl border border-[#242a33] bg-[#15191f] px-4 py-3 shadow-sm">
  <div className="flex w-full items-center gap-4">

    {/* Workout image */}
    <div className="h-12 w-20 shrink-0 overflow-hidden rounded-md bg-[#20252c]">
      <Image
        src={workout.image}
        alt={workout.name}
        width={80}
        height={48}
        className="h-full w-full object-cover"
      />
    </div>

    {/* Workout information */}
    <div className="min-w-0 flex-1">
      <h3 className="truncate text-[11px] font-bold uppercase tracking-wide text-white">
        {workout.name}
      </h3>

      <p className="mt-0.5 text-[8px] text-gray-500">
        {workout.equipment || "Bodyweight"}
      </p>

      <div className="mt-1.5 flex items-center gap-3 text-[8px] text-gray-400">
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

    {/* Actions */}
    <div className="ml-auto flex shrink-0 items-center gap-2">
      <button
        type="button"
        className="rounded-full border border-[#303640] px-3 py-1.5 text-[8px] text-gray-300"
      >
        View Details
      </button>

      <button
        type="button"
        className="rounded-full bg-[#c2f800] px-4 py-1.5 text-[8px] font-bold text-black"
      >
        ✓ Mark as Done
      </button>

      <button
        type="button"
        aria-label="Remove workout"
        className="ml-1 text-xs text-gray-600 hover:text-white"
      >
        ×
      </button>
    </div>

  </div>
</div>
  );
};

export default MyPlanPagesCard;
