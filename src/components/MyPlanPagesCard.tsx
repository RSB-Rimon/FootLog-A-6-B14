import React, { useContext } from "react";
import { IWorkout } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { WorkOutContext } from "@/context/WorkOutContext";
import { toast } from "react-toastify";

interface WorkoutCardProps {  
  workout: IWorkout;
   type: "today" | "saved";
}

const MyPlanPagesCard = ({ workout,type}: WorkoutCardProps) => {
  const {removeFromTodayPlan,removeFromSave }=useContext(WorkOutContext)

  const handleRemove = () => {
  if (type  === "today") {
    removeFromTodayPlan(workout.id);
    toast.success("Work Out remove from today's plan")
  } else {
    removeFromSave(workout.id);
      toast.success("Work Out remove from saved")
  }
};
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
     <Link href={`/workouts/${workout.id}`}>
        <button className="rounded-full border border-[#303640] px-4 py-2 text-[9px] text-gray-300">
        View Details
      </button>
     
     </Link>

     <div className="">
       <button className="rounded-full flex items-center bg-[#c2f800] px-5 py-2 text-[9px] font-bold text-black">
        <Check size={16}/> Mark as Done
      </button>
     </div>

      <button
      onClick={handleRemove}
      
      
      className="px-1 text-gray-600 hover:text-white">
     <X  />
      </button>
    </div>

  </div>
</div>
  );
};

export default MyPlanPagesCard;
