import React, { useState } from 'react'
import { toast } from 'react-toastify';
// import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

let counter = 0;
const AddTask = ({setTasks,tasks}) => {

      console.log(tasks);
     const [input,setInput] = useState('');
    function changeHandler(e){
        
         setInput(e.target.value);
         console.log(input);
    }


    function handleSubmit(e){
     
        e.preventDefault();
        // console.log(input);
        setTasks((prevTasks) => {
            return [...prevTasks, [input,counter]];
        });
        
        setInput('');
        counter++;
        toast.success("Task Added !")
    }
  return (
    <div className=' mt-10'>
          <div className=' w-[400px] h-[200px] border-black border  shadow-2xl  flex flex-col mx-auto '>
            <h1 className=' text-center font-bold text-2xl mt-2   '> Add Your Task</h1>
            <form className=' flex flex-col gap-[2rem] items-center'
             onSubmit={handleSubmit }
            >
            <input type=' text' 
             className=' w-[90%] border  mx-3 border-black mt-4 '
             value={input}
             onChange={changeHandler}
            ></input>
            <button
             type='submit'
             className=' transition-all  duration-300 hover:scale-125 border  hover:border-t-2 hover:border-r-2 border-black px-2 py-1 bg-green-500  w-[60px] '
            >ADD</button>
            </form>
            

          </div>
    </div>
  )
}

export default AddTask;
