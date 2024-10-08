"use client";
import { createContext, useState, useContext, useEffect } from 'react';

// createContext es una función que crea un contexto de React. Un contexto es una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel.
const TaskContext = createContext();

// en este caso creamos un componente que se encarga de proveer el contexto a los componentes hijos, su nombre es TaskProvider y recibe un children como argumento que nos permite renderizar los componentes hijos en las otras partes de la aplicación.
export const TaskProvider = ({ children }) => {
    const addTask = (title, description) => {
        const newTask = { id: tasks.length + 1, title, description };
        setTasks([newTask, ...tasks]);
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== parseInt(id)));
    }

    const updateTask = (id,title,description) => {
        const taskIndex = tasks.findIndex(task => task.id === parseInt(id));
        const newTasks = [...tasks];
        newTasks[taskIndex] = {id: parseInt(id), title, description};
        setTasks(newTasks);
    }

    // creamos una constante tasks que es un array vacío, esta constante se encargará de almacenar las tareas que se creen en la aplicación.
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Tarea 1', description: 'Descripción de la tarea 1' },
        { id: 2, title: 'Tarea 2', description: 'Descripción de la tarea 2' },
        { id: 3, title: 'Tarea 3', description: 'Descripción de la tarea 3' },
        { id: 4, title: 'Tarea 4', description: 'Descripción de la tarea 4' },
        { id: 5, title: 'Tarea 5', description: 'Descripción de la tarea 5' },
        { id: 6, title: 'Tarea 6', description: 'Descripción de la tarea 6' },
        { id: 7, title: 'Tarea 7', description: 'Descripción de la tarea 7' },
        { id: 8, title: 'Tarea 8', description: 'Descripción de la tarea 8' },
        { id: 9, title: 'Tarea 9', description: 'Descripción de la tarea 9' },
        { id: 10, title: 'Tarea 10', description: 'Descripción de la tarea 10' },
    ]);

    // retornamos el componente TaskContext.Provider que se encarga de proveer el contexto a los componentes hijos, en este caso children.
    return (
        <TaskContext.Provider value={
            { tasks,addTask,deleteTask,updateTask}
            }>
            {children}
        </TaskContext.Provider>
    );
};

// exportar el hook useTask que nos permite consumir el contexto en los componentes hijos.

export const useTasks = () => useContext(TaskContext);