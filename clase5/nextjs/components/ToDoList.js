import { useState } from "react";

export default function ToDoList(){
    const [task,setTask] = useState('')
    const [tasks,setTasks] = useState(['Tarea 1','Tarea 2'])

    function handleTask(){
        if(task.length > 5){
            // set task add value first in array
            setTasks([task,...tasks])
            setTask("")
        }
    }

    return(
        <div className="bg-orange-100 p-4 flex flex-col items center gap-2">
            <input 
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add new Task"
                className="p-2 border border-gray-400 rounded w-1/4 mx-auto"
            />  
            <button
            onClick={handleTask}
            className="bg-blue-400 hover:bg-blue-700 w-1/4 mx-auto text-white font-bold py-2 px-4 rounded">Add Task</button>
            <ul className="w-1/4 mx-auto">

                {tasks.map((task,index) => (
                    <li key={index} className="bg-amber-200 p-4 m-2">{task}</li>
                ))}
            </ul>
        </div>
    );
}