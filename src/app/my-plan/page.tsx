"use client";

import { WorkOutContext } from "@/context/WorkOutContext";
import { IWorkout } from "@/types/types";
import React, { useContext, useState } from "react";
import Link from "next/link";
import MyPlanPagesCard from "@/components/MyPlanPagesCard";

const TodayPlanPage = () => {
  const { todayPlan, saveWorkOut } = useContext(WorkOutContext);

  const [sortBy, setSortBy] = useState<
    "rating" | "duration" | "caloriesBurned"
  >("rating");

  // Tab state
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const sortWorkOUt = (workout: IWorkout[]) => {
    const sortWorkOuts = [...workout];

    if (sortBy === "rating") {
      sortWorkOuts.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "duration") {
      sortWorkOuts.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "caloriesBurned") {
      sortWorkOuts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }

    return sortWorkOuts;
  };

  const sortedTodayPlan = sortWorkOUt(todayPlan);
  const sortedSaveWorkOut = sortWorkOUt(saveWorkOut);

  const totalMinuties = todayPlan.reduce(
    (total: number, workout: IWorkout) => total + workout.duration,
    0
  );

  const totalCalorices = todayPlan.reduce(
    (total: number, workout: IWorkout) =>
      total + workout.caloriesBurned,
    0
  );

  return (
    <div className="container mx-auto text-white px-4 m-5">
      <h1 className="text-4xl font-bold">MY PLAN</h1>

      <p className="my-3 text-gray-400">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Stats */}
      <div className="stats stats-vertical lg:stats-horizontal flex shadow">
        <div className="stat">
          <div className="stat-title text-white">Exercises</div>
          <div className="stat-value">
            {todayPlan.length}
          </div>
        </div>

        <div className="stat">
          <div className="stat-title text-white">Minutes</div>
          <div className="stat-value">
            {totalMinuties} minutes
          </div>
        </div>

        <div className="stat">
          <div className="stat-title text-white">Calories</div>
          <div className="stat-value">
            {totalCalorices} cal
          </div>
        </div>
      </div>

      {/* Sorting */}
      <div className="text-center mt-5">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(
              e.target.value as
                | "rating"
                | "duration"
                | "caloriesBurned"
            )
          }
          className="select select-success bg-[#89fc05] text-black"
        >
          <option value="rating">Rating</option>
          <option value="duration">Duration</option>
          <option value="caloriesBurned">
            Calories Burned
          </option>
        </select>
      </div>

      {/* ================= TABS ================= */}
      <div className="mt-7">

        {/* Tab Buttons */}
        <div className="flex gap-6 border-b border-gray-800">

          {/* Today's Plan Button */}
          <button
            onClick={() => setActiveTab("today")}
            className={`px-4 py-3 text-sm font-semibold transition ${
              activeTab === "today"
                ? "text-[#c2f800] border-b-2 border-[#c2f800]"
                : "text-gray-500 hover:text-white"
            }`}
          >
            Today's Plan
          </button>

          {/* Saved Button */}
          <button
            onClick={() => setActiveTab("saved")}
            className={`px-4 py-3 text-sm font-semibold transition ${
              activeTab === "saved"
                ? "text-[#c2f800] border-b-2 border-[#c2f800]"
                : "text-gray-500 hover:text-white"
            }`}
          >
            Saved
          </button>

        </div>

        {/* ================= TODAY'S PLAN ================= */}
        {activeTab === "today" && (
          <div className="w-full bg-black p-6 text-white">

            {sortedTodayPlan.length > 0 ? (
              <div className="w-full space-y-3">

                {sortedTodayPlan.map(
                  (workout: IWorkout, index: number) => (
                    <MyPlanPagesCard
                      key={`${workout.id}-${index}`}
                      workout={workout}
                      type="today"
                    />
                  )
                )}

              </div>
            ) : (
              <div className="min-h-[300px] border border-dotted border-gray-600 flex flex-col items-center justify-center text-center">

                <h2 className="text-lg font-bold tracking-wide">
                  NOTHING HERE YET
                </h2>

                <p className="text-xs text-gray-500 mt-2">
                  Browse the library and add a lift to get
                  today moving.
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
        )}

        {/* ================= SAVED ================= */}
        {activeTab === "saved" && (
          <div className="w-full bg-black p-6 text-white">

            {sortedSaveWorkOut.length > 0 ? (
              <div className="w-full space-y-3">

                {sortedSaveWorkOut.map(
                  (workout: IWorkout, index: number) => (
                    <MyPlanPagesCard
                      key={`${workout.id}-${index}`}
                      workout={workout}
                      type="saved"
                    />
                  )
                )}

              </div>
            ) : (
              <div className="min-h-[300px] border border-dotted border-gray-600 flex flex-col items-center justify-center text-center">

                <h2 className="text-lg font-bold tracking-wide">
                  NOTHING HERE YET
                </h2>

                <p className="text-xs text-gray-500 mt-2">
                  Browse the library and save workouts to
                  see them here.
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
        )}

      </div>
    </div>
  );
};

export default TodayPlanPage;