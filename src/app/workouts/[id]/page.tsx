import SaveButton from "@/components/workDetails/SaveButton";
import ToadayPanButton from "@/components/workDetails/ToadayPanButton";
import { IWorkout } from "@/types/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

interface WorkOutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkouts = async (): Promise<IWorkout[]> => {
  try {
    const res = await fetch("https://api.api-store.workers.dev/api/fitlog", {
      cache: "no-store",
    });

    if (!res.ok) {
      return [];
    }

    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return [];
    }

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to load workout details:", error);
    return [];
  }
};

const WorkOutDetailsPage = async ({ params }: WorkOutDetailsPageProps) => {
  const { id } = await params;
  const workoutsdata = await getWorkouts();
  const workout = workoutsdata.find(
    (workout: IWorkout) => workout.id === Number.parseInt(id, 10),
  );

  if (!workout) {
    notFound();
  }

  return (
    <div className="bg-[#0f1014] border border-[#202228] rounded-xl p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Image
            src={workout.image}
            alt={workout.name}
            width={700}
            height={700}
            className="w-full h-[700px] object-cover rounded-xl"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white uppercase">
            {workout.name}
          </h1>

          <p className="text-[#77787d] text-sm mt-2">{workout.description}</p>

          <div className="flex gap-2 mt-4">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="bg-[#c2f800] text-black text-xs font-bold px-3 py-1 rounded-full"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="bg-[#15171d] border border-[#252832] rounded-xl mt-5">
            <div className="flex justify-between px-4 py-3 border-b border-[#252832]">
              <span className="text-[#77787d] text-xs uppercase">
                Equipment
              </span>
              <span className="text-white text-sm">{workout.equipment}</span>
            </div>

            <div className="flex justify-between px-4 py-3 border-b border-[#252832]">
              <span className="text-[#77787d] text-xs uppercase">
                Difficulty
              </span>
              <span className="text-white text-sm">{workout.difficulty}</span>
            </div>

            <div className="flex justify-between px-4 py-3 border-b border-[#252832]">
              <span className="text-[#77787d] text-xs uppercase">Sets</span>
              <span className="text-white text-sm">{workout.sets}</span>
            </div>

            <div className="flex justify-between px-4 py-3 border-b border-[#252832]">
              <span className="text-[#77787d] text-xs uppercase">Reps</span>
              <span className="text-white text-sm">{workout.reps}</span>
            </div>

            <div className="flex justify-between px-4 py-3 border-b border-[#252832]">
              <span className="text-[#77787d] text-xs uppercase">Duration</span>
              <span className="text-white text-sm">{workout.duration} min</span>
            </div>

            <div className="flex justify-between px-4 py-3 border-b border-[#252832]">
              <span className="text-[#77787d] text-xs uppercase">Calories</span>
              <span className="text-white text-sm">
                {workout.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex justify-between px-4 py-3">
              <span className="text-[#77787d] text-xs uppercase">Rating</span>
              <span className="text-white text-sm">{workout.rating}</span>
            </div>
          </div>

          <div className="mt-5">
            <h2 className="text-white text-sm font-bold uppercase">
              Instructions
            </h2>

            <ol className="mt-3 space-y-2">
              {workout.instructions.map((instruction, index) => (
                <li key={index} className="text-[#85868b] text-xs">
                  {index + 1}. {instruction}
                </li>
              ))}
            </ol>
          </div>

          <div className="flex gap-3 mt-6">
            <ToadayPanButton workout={workout} />
            <SaveButton workout={workout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOutDetailsPage;
