"use client"
// import { TaskList } from "../components/TaskList";
// import { TaskForm } from "../components/TaskForm";
// import { TaskView } from "../components/TaskView";
import { useEffect, useState } from "react";
import { useTasks } from "../context/TaskContext";


export default function Home() {
  const {tasks,createTask,deleteTask,updateTask,updateCompleted} = useTasks();
  const [selectedTask,setSelectedTask] = useState(null);
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');

  const handleForm = (e) => {
    console.log('handleForm');
    e.preventDefault();
  }

  const cleanForm = () => {
    setTitle('');
    setDescription('');
  }

  useEffect(() => {
    if(selectedTask){
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
    }else{
      setTitle('');
      setDescription('');
    }
  } ,[selectedTask]);

  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="bg-blue-200 p-4">
        <h2>Lista de Tareas</h2>
        <ul className="mt-2">
          {tasks.map((task) => (
            <li key={task.id} className="flex flex-col gap-2">
              <div  className={task.completed ? "line-through text-gray-500" : "text-black"}>
                <p>{task.title}</p>
                <p>{task.description}</p>
              </div>
              <div className="grid grid-cols-1 gap-2 w-1/2">
                <button className="bg-blue-500 p-1 rounded-xl"
                onClick={() => setSelectedTask(task)}>Ver</button>
                <button className="bg-red-500 rounded-xl" 
                onClick={() => deleteTask(task.id)}
                >Borrar</button>
                <button onClick = {() => updateCompleted(task.id)} className="bg-green-500 rounded-xl">
                  {task.completed ? "Pasar a Pendiente" : "Pasar a Realizada"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-blue-200 p-4">
        <h2>Crear/Editar Tarea</h2>
        <form onSubmit={handleForm}>
        <div class="mt-4">
          <label class="block text-gray-700 text-lg font-bold mb-2" for="title">
            Tarea
          </label>
          <input 
            class="border rounded w-full py-2 px-3 text-gray-700"
            id="title"
            type="text"
            placeholder="tarea"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
          <label class="block text-gray-700 text-lg font-bold mb-2" for="description">
            Descripción
          </label>
          <textarea 
            class="border rounded w-full py-2 px-3 text-gray-700" id="description"
            type="text"
            placeholder="descripción" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
          <div className="mt-2 grid grid-cols-2 gap-2">
            <button 
              class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" 
              type="submit"
              onClick = {cleanForm}
              >
              Limpiar
            </button>
            <button 
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
              type="submit"
              //on Click create and clean form
              onClick = {() => { createTask(title,description); cleanForm();}}
              >
              Crear Tarea
            </button>
          </div>
        </div>
        </form>
        
      </div>
      <div>
        
      </div>
    </div> 
  );
}
