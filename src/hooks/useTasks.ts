import { useEffect, useState } from "react";
import type { TaskList } from "../types/Task";



function useTasks(){
    const [Tasks, setTasks]= useState<TaskList>(()=>{
          const storedTasks = localStorage.getItem("tasks");
        if(storedTasks){
            return JSON.parse(storedTasks);
        }
        return [];
    });
    useEffect(()=>{
      
    },[])
    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(Tasks));
    },[Tasks])

    return {Tasks,setTasks};
}

export default useTasks;