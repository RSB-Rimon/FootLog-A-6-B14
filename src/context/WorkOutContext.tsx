 "use client"
import { IWorkout } from '@/types/types';
 import React, { createContext, ReactNode, useState } from 'react';




 export const WorkOutContext = createContext({})


const WorkOutProvider = ({children}:{children: ReactNode}) => {
   const [todayPlan, setTodayPlan] = useState<IWorkout[]>([]);

    const [saveWorkOut , setSaveWorkOut] = useState<IWorkout[]>([]);

    const sharedData = {
        todayPlan,
        setTodayPlan,
        saveWorkOut,
        setSaveWorkOut
    }
    return <WorkOutContext.Provider value={sharedData}>{children}</WorkOutContext.Provider>
};

export default WorkOutProvider;