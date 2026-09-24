
import { IWorkout } from "@/types/types";
import { Clock3, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface WorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
  
  <div>
   
     <section className=" w-full rounded-xl border border-[#292a30] bg-[#15161b]  overflow-hidden">
     
  <div className="relative">
    <Image
      src={workout.image}
      alt={workout.name}
      width={500}
      height={300}
      className="w-full h-48 object-cover"
    />

    <div className="absolute bottom-3 left-3 flex gap-2">
      {workout.muscleGroups.map((muscle) => (
        <span
          key={muscle}
          className="bg-[#c2f800] text-black text-[10px] font-bold px-2 py-1 rounded-full"
        >
          {muscle}
        </span>
      ))}
    </div>
  </div>

  <div className="p-4">

    <h2 className="text-white text-base font-bold uppercase">
      {workout.name}
    </h2>

    <p className="text-[#77787d] text-xs mt-1">
      {workout.equipment}
    </p>

    <div className="border-t border-[#292a30] my-4"></div>

    <div className="flex justify-between text-[#85868b] text-xs">

      <div className="flex items-center gap-1">
        <Clock3 size={14} />
        <span>{workout.duration} min</span>
      </div>

      <div className="flex items-center gap-1">
        <Flame size={14} />
        <span>{workout.caloriesBurned} kcal</span>
      </div>

      <div className="flex items-center gap-1">
        <Star size={14} />
        <span>{workout.rating}</span>
      </div>

    </div>
  </div>
   <div className=" p-4  flex justify-center">
   <Link href={`/workouts/${workout.id}`} className="w-full">
     <button className="btn w-full  bg-[#c2f800]  btn-active ">View Details</button>
   </Link>
   </div>
</section>
  </div>
  );
};

export default WorkoutCard;