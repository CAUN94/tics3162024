import React, { useState } from 'react'

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
  
    function addTask() {
      setTasks([...tasks, task]);
      setTask("");
    }
  
    return (
      <div>
        <input value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={addTask}>Add Task</button>
        <ul>
          {tasks.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ToDoList;