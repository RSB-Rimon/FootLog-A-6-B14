"use client";
import { WorkOutContext } from "@/context/WorkOutContext";
import { IWorkout } from "@/types/types";
import { Bookmark } from "lucide-react";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const SaveButton = ({ workout }: { workout: IWorkout }) => {
  const { saveWorkOut, setSaveWorkOut } = useContext(WorkOutContext);

  const handleSaveBtn = () => {
    console.log("TodayPlan tiger", workout);
    setSaveWorkOut([...saveWorkOut, workout]);
    toast.success(`You have save ${workout.name}`);
  };
  return (
    <div className="">
      <button onClick={()=>handleSaveBtn() } className="flex items-center gap-1 border border-[#30333b] text-white px-6 py-2 rounded-lg text-xs">
       <Bookmark  size={18} /> Save for later
      </button>
    </div>
  );
};

export default SaveButton;
