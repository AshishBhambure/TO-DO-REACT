import React from 'react'
import Task from './Task';
const TaskList = (props) => {
    let tasks = props.tasks;
    let setTasks = props.setTasks;

    function removeHandler(id)
    {
     const ts =  tasks.filter((t)=>(t[1] != id));
     console.log(ts);
     setTasks(ts);
    }
  return (
    <div className=' w-[400px]   h-full  mx-auto mt-[2rem]  '>
       {
         tasks.map((t)=>(
            <Task
             task={t}
             setTasks={t}
             key={t[1]}
             id = {t[1]}
             removeHandler={removeHandler}
            ></Task>
         ))
       }
    </div>
  )
}

export default TaskList;
