import WorkoutCard from '@/components/WorkoutsCard';
import { IWorkout } from '@/types/types';
import React from 'react';


 const getWorkouts = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json(); 
    return data;

 }
 


const WorkoutsPages =async () => {
    const workoutsdata = await getWorkouts();
    console.log(workoutsdata,"workoutdata")
    return (
        <div className=' grid grid-cols-3 gap-6 text-white container mx-auto mt-8 px-4'>
           
         {
            workoutsdata.map((workout:IWorkout)=> {
                return ( 
                    <WorkoutCard key={workout.id} workout={workout} />
                )
            }
         )}
        </div>
    );
};

export default WorkoutsPages;