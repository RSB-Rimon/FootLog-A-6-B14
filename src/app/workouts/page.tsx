import WorkoutCard from "@/components/WorkoutsCard";
import { IWorkout } from "@/types/types";
import React from "react";

const getWorkouts = async ()=>{
  const res = await fetch('https://api.api-store.workers.dev/api/fitlog');
  const data = await res.json()
  return data
}
  

 

    




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
