"use client"
import { createContext, useState, useContext, useEffect } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
 const [tasks, setTasks] = useState([
    {id:1, title:'Tarea1',description:'Descripcion de tarea 1'},
    {id:2, title:'Tarea2',description:'Descripcion de tarea 2'},
    {id:3, title:'Tarea3',description:'Descripcion de tarea 3'},
    {id:4, title:'Tarea4',description:'Descripcion de tarea 4'},
    {id:5, title:'Tarea5',description:'Descripcion de tarea 5'},
    {id:6, title:'Tarea6',description:'Descripcion de tarea 6'},
 ]);

 return (
    <TaskContext.Provider value={{tasks, setTasks}}>
      {children}
    </TaskContext.Provider>
 );
};

export const useTasks = () => useContext(TaskContext);