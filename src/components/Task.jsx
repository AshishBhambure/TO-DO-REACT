import React from 'react';
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';

const Task = ({ task, setTasks , id , removeHandler}) => {
  let cnt = 0;
   for(let i = 0;i<task[0].length;i++)
    {
      if(task[i] == ' ') cnt++;
    }
    if(cnt == task[0].length) return <div></div>
  return (

    <div className='w-full h-[40px] my-4 shadow-2xl py-10 flex items-center ' >
      <div className='w-full h-full flex items-center justify-between'>
        <input readOnly className=' unset' value={task[0]} onClick={(e)=>e.preventDefault()}></input>
        <button
          onClick={()=>{removeHandler(id) ; toast.error("Task Removed !")}}
          id=''
          className='flex items-center justify-center w-[30px] h-[30px] bg-green-500 hover:bg-red-500 rounded-full'
        >
          <MdDelete className='text-xl' />
        </button>
      </div>
      {/* <hr className='  font-bold text-red-500' /> */}
    </div>
  );
}

export default Task;
