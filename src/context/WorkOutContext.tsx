 "use client"
import { IWorkout } from '@/types/types';
 import React, { createContext, ReactNode, useState } from 'react';



 export const WorkOutContext = createContext({})


 const WorkOutProvider = ({children}:{children: ReactNode}) => {
     const [todayPlan, setTodayPlan] = useState<IWorkout[]>([]);
     const [saveWorkOut , setSaveWorkOut] = useState<IWorkout[]>([]);

   const removeFromTodayPlan =(id:number)=>{
    setTodayPlan((work)=>
    work.filter((workout)=> workout.id!== id));

   };
   const removeFromSave =(id:number)=>{
    setSaveWorkOut((work)=>
    work.filter((workout)=> workout.id!== id));

   };



    const sharedData = {
        todayPlan,
        setTodayPlan,
        saveWorkOut,
        setSaveWorkOut,
        removeFromTodayPlan,
        removeFromSave

    }
    return <WorkOutContext.Provider value={sharedData}>{children}</WorkOutContext.Provider>
};

export default WorkOutProvider;