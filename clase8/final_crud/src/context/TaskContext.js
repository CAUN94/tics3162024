"use client"
import {createContext,useState,useContext,useEffect, act} from 'react';

const TaskContext = createContext();

export function TaskProvider({children}){
    const [tasks,setTasks] = useState([
        {id:1, title:'Task 1', description:"Text de ejemplo para las Task 1", completed:true},
        {id:2, title:'Task 2', description:"Text de ejemplo para las Task 2", completed:false},
        {id:3, title:'Task 3', description:"Text de ejemplo para las Task 3", completed:false},
    ]);

    const createTask = (title,description) => {
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