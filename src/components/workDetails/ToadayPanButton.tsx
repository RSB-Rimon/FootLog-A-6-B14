'use client'
import { WorkOutContext } from '@/context/WorkOutContext';
import { IWorkout } from '@/types/types';
import { CalendarPlus2} from 'lucide-react';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ToadayPanButton = ({workout}:{workout:IWorkout}) => {

    const { todayPlan, setTodayPlan}= useContext(WorkOutContext);
   

    const handleTodayPlan = ()=>{
        console.log('TodayPlan tiger',workout)
        setTodayPlan([...todayPlan , workout]);
        toast.success(`You have add ${workout.name}`)

    }
    return (
        <div>
               <button onClick={()=> handleTodayPlan()} className="flex items-center gap-1 bg-[#c2f800] text-black px-8 py-2 rounded-lg text-xs font-bold " >
         <CalendarPlus2 size={18} />  Add to today's plan
        </button>
        </div>
    );  
};

export default ToadayPanButton;