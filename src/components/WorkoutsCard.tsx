import { IWorkout } from "@/types/workoutTypes";
import { Clock3, Flame, Star } from "lucide-react";
import Image from "next/image";

interface WorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <article className="group w-full overflow-hidden rounded-xl border border-zinc-800 bg-[#15161b] transition duration-300 hover:-translate-y-1 hover:border-zinc-700">
      
      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
        <Image
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Muscle groups */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#c2f800] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-black"
            >
              {muscle}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="truncate text-base font-bold uppercase tracking-wide text-white">
          {workout.name}
        </h2>

        {/* Equipment */}
        <p className="mt-1 truncate text-xs text-zinc-500">
          {workout.equipment}
        </p>

        <div className="my-3 h-px bg-zinc-800" />

        {/* Stats */}
        <div className="flex items-center justify-between gap-2 text-xs text-zinc-400">
          
          <div className="flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5" />
            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Flame className="h-3.5 w-3.5" />
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span>{workout.rating}</span>
          </div>

        </div>
      </div>
    </article>
  );
};

export default WorkoutCard;