import WorkoutCard from "@/components/WorkoutsCard";
import { IWorkout } from "@/types/types";
import React from "react";

const getWorkouts = async (): Promise<IWorkout[]> => {
  try {
    const res = await fetch("https://api.api-store.workers.dev/api/fitlog", {
      cache: "no-store",
    });

    if (!res.ok) {
      console.log("API Error:", res.status);
      return [];
    }

    const text = await res.text();

    if (
      !text ||
      (!text.trim().startsWith("[") && !text.trim().startsWith("{"))
    ) {
      return [];
    }

    const data = JSON.parse(text);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to load workouts:", error);
    return [];
  }
};

const WorkoutsPages = async () => {
  const workoutsdata = await getWorkouts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white container mx-auto mt-8 px-4">
      {workoutsdata.length > 0 ? (
        workoutsdata.map((workout: IWorkout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))
      ) : (
        <div className="col-span-full rounded-xl border border-dashed border-gray-700 bg-[#15161b] p-8 text-center text-gray-300">
          Workouts are temporarily unavailable. Please try again in a moment.
        </div>
      )}
    </div>
  );
};

export default WorkoutsPages;
