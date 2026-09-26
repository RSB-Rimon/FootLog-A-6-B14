"use client";

import WorkoutCard from "@/components/WorkoutsCard";
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
  const [sortBy, setSortBy] = useState<"rating" | "duration" |"calories" >("rating")

  console.log(sortBy , "short by okol ta ")

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
        onChange={(e)=> setSortBy(e.target.value as "rating" |"duration" |"calories")}
        
        defaultValue="sort by"  className="select select-success bg-[#99cd5e] text-black">
        <option  disabled={true}>Sort by</option>
        <option value={"rating"}>Rating</option>
        <option value={"duration"}>Duration</option>
        <option value={"calories"}>Calories</option>
      </select>
    </div>

      {/* tabs */}
      <div className="tabs tabs-lift text-black mt-7">
        {/* Today's Plan */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Today's Plan"
          defaultChecked
        />

        <div className="tab-content w-full bg-black p-6 text-white">
          {todayPlan.length > 0 ? (
            <div className="w-full space-y-3">
              {todayPlan.map((workout: IWorkout) => (
                <MyPlanPagesCard key={workout.id} workout={workout} />
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
          {saveWorkOut.length > 0 ? (
            <div className="w-full space-y-3">
              {todayPlan.map((workout: IWorkout) => (
                <MyPlanPagesCard key={workout.id} workout={workout} />
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
