"use client";
import { useState } from 'react';  
import { useTasks } from "../../../context/TaskContext";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Link from 'next/link';

export default function EditTasklPage(){
    const { tasks,updateTask} = useTasks();
    const {id} = useParams();
    const task = tasks.find(task => task.id === parseInt(id));
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const router = useRouter();

    const handleSubmit = (e) => {
        if(confirm("Are you sure you want to edit this task?")){
            e.preventDefault();
            updateTask(id,title,description);
            router.push("/");
        }
    }

    return(
        <div>
            <h1 className='text-center my-4 text-4xl text-red-500'>Edit Task: {task.title}</h1>
            <div className='w-full max-w-lg p-6 bg-white rounded-lg shadow-md mx-auto'>
                <form 
                    className='flex flex-col space-y-4'
                    onSubmit={handleSubmit}
                > 
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    />
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    />
                    <button type="submit" className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Save Task</button>
                </form>
            </div>
        </div>
    );
}