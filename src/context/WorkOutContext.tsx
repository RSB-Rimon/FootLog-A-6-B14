"use client";

import { IWorkout } from "@/types/types";
import React, { createContext, ReactNode, useState } from "react";

interface WorkOutContextType {
  todayPlan: IWorkout[];
  setTodayPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  saveWorkOut: IWorkout[];
  setSaveWorkOut: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  removeFromTodayPlan: (id: number) => void;
  removeFromSave: (id: number) => void;
}

export const WorkOutContext = createContext<WorkOutContextType>({
  todayPlan: [],
  setTodayPlan: () => undefined,
  saveWorkOut: [],
  setSaveWorkOut: () => undefined,
  removeFromTodayPlan: () => undefined,
  removeFromSave: () => undefined,
});

const WorkOutProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<IWorkout[]>([]);
  const [saveWorkOut, setSaveWorkOut] = useState<IWorkout[]>([]);

  const removeFromTodayPlan = (id: number) => {
    setTodayPlan((work) => work.filter((workout) => workout.id !== id));
  };

  const removeFromSave = (id: number) => {
    setSaveWorkOut((work) => work.filter((workout) => workout.id !== id));
  };

  const sharedData: WorkOutContextType = {
    todayPlan,
    setTodayPlan,
    saveWorkOut,
    setSaveWorkOut,
    removeFromTodayPlan,
    removeFromSave,
  };

  return (
    <WorkOutContext.Provider value={sharedData}>
      {children}
    </WorkOutContext.Provider>
  );
};

export default WorkOutProvider;
