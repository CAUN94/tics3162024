"use client"
import {createContext,useState,useContext,useEffect, act} from 'react';

const TaskContext = createContext();

export function TaskProvider({children}){
    const [tasks,setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks'); 
        if (storedTasks) setTasks(JSON.parse(storedTasks));
      }, []);

      useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks)); 
      }, [tasks]);

    const createTask = (title,description) => {
        if (!title || !description) return;
        const newTask = {
            id: Date.now(),
            title,
            description,
            completed: false
        };
        setTasks([newTask,...tasks]);
    }

    const deleteTask = (id) => {
        // Filtro las tareas que no sean la que quiero eliminar
        const newTask = tasks.filter(task => task.id !== id);
        setTasks(newTask);
    }

    const updateTask = (id,updatedTask) => {
        title = updatedTask.title;
        description = updatedTask.description;
        completed = updatedTask.completed;
        actualTasks = tasks.map(task => (task.id === id ? {id,title,description,completed} : task));
        setTasks(actualTasks);
    }

    const updateCompleted = (id) => {
        const updatedtask = tasks.find(task => task.id === id);
        updatedtask.completed = !updatedtask.completed;
        const actualTasks = tasks.map(task => (task.id === id ? updatedtask : task));
        setTasks(actualTasks);
    }

    return (
        <TaskContext.Provider value={{tasks,createTask,deleteTask,updateTask,updateCompleted}}>
            {children}
        </TaskContext.Provider>
    );
}


export function useTasks(){
    return  useContext(TaskContext);
}