import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {

  const [tasks,setTasks] = useState([]);
  return (
    <div className=" w-[100vw] h-[100vh]   scroll-m-5 overflow-x-hidden">
      <AddTask
       setTasks = {setTasks} 
       tasks = {tasks}
      ></AddTask>
      <TaskList
       tasks = {tasks}
       setTasks={setTasks}

      ></TaskList>
      
    </div>
  );
}

export default App;
