"use client";


import { WorkOutContext } from "@/context/WorkOutContext";
import { IWorkout } from "@/types/types";
import React, { useContext, useState } from "react";
import Link from "next/link";
import MyPlanPagesCard from "@/components/MyPlanPagesCard";
// interface IWorkOutContext {
//   todayPlan: IWorkout[];
//   saveWorkOut: (workout: IWorkout) => void;
// }

const TodayPlanPage = () => {
  const { todayPlan, saveWorkOut } = useContext(WorkOutContext);
  const [sortBy, setSortBy] = useState<"rating" | "duration" |"caloriesBurned" >("rating")


  const sortWorkOUt = (workout:IWorkout[])=>{
    const sortWorkOuts = [...workout];
    if(sortBy==='rating'){
      sortWorkOuts.sort((a,b)=> b.rating - a.rating)
    }else if(sortBy === "duration"){
      sortWorkOuts.sort((a,b)=>b.duration - a.duration)
    }else if(sortBy === "caloriesBurned"){
      sortWorkOuts.sort((a,b)=> b.caloriesBurned - a.caloriesBurned)
    }
    return sortWorkOuts;

  }
  const sortedTodayPlan = sortWorkOUt(todayPlan);
  const sortedSaveWorkOut = sortWorkOUt(saveWorkOut)



  return (
    <div className="container mx-auto text-white px-4 m-5">
      <h1 className="text-4xl font-bold">MY PLAN</h1>

      <p className="my-3 text-gray-400">
        Cap of five lifts for today. Finish them, then load more.
      </p>
      {/* this is Sorting section  */}

   <div className="text-center">
  <select
    value={sortBy}
    onChange={(e) =>
      setSortBy(
        e.target.value as "rating" | "duration" | "caloriesBurned"
      )
    }
    className="select select-success bg-[#89fc05] text-black"
  >
    <option value="rating">Rating</option>
    <option value="duration">Duration</option>
    <option value="caloriesBurned">Calories Burned</option>
  </select>
</div>

      {/* tabs */}
      <div className="tabs tabs-lift text-black bg-gray-400 mt-7 ">
        {/* Today's Plan */}
        <input 
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Today's Plan"
          defaultChecked
        />

        <div className="tab-content w-full bg-black p-6 text-white">
          {sortedTodayPlan.length > 0 ? (
            <div className="w-full space-y-3">
              {sortedTodayPlan.map((workout: IWorkout, index:number) => (
                <MyPlanPagesCard key={`${workout.id}-${index}`} workout={workout}
                 type="today" />
              ))}
            </div>
          ) : (
            <div className="min-h-[300px] border border-dotted border-gray-600 flex flex-col items-center justify-center text-center">
              <h2 className="text-lg font-bold tracking-wide">
                NOTHING HERE YET
              </h2>

              <p className="text-xs text-gray-500 mt-2">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/workouts"
                className="mt-5 bg-[#c2f800] text-black px-5 py-2 rounded-full text-xs font-bold hover:bg-[#b3e600] transition"
              >
                Go to workouts
              </Link>
            </div>
          )}
        </div>

        {/* Saved */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Saved"
        />

        <div className=" tab-content w-full bg-black p-6 text-white">
          {sortedSaveWorkOut.length > 0 ? (
            <div className="w-full space-y-3">
              {sortedSaveWorkOut.map((workout: IWorkout , index:number) => (
                <MyPlanPagesCard key={`${workout.id}-${index}`} workout={workout}
                 type="saved"
                />
              ))}
            </div>
          ) : (
            <div className="min-h-[300px] border border-dotted border-gray-600 flex flex-col items-center justify-center text-center">
              <h2 className="text-lg font-bold tracking-wide">
                NOTHING HERE YET
              </h2>

              <p className="text-xs text-gray-500 mt-2">
                Browse the library and save workouts to see them here.
              </p>

              <Link
                href="/workouts"
                className="mt-5 bg-[#c2f800] text-black px-5 py-2 rounded-full text-xs font-bold hover:bg-[#b3e600] transition"
              >
                Go to workouts
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodayPlanPage;
