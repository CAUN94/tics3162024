"use client";
import { useState,useEffect } from 'react';  
import { useTasks } from "../../../context/TaskContext";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Link from 'next/link';

export default function EditTaskPage() {
    const { tasks, updateTask } = useTasks();
    const router = useRouter();
    const { id } = useParams();
    const task = tasks.find(task => task.id === parseInt(id));
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    const handleSubmmit = (e) => {
        e.preventDefault();
        updateTask(id, title, description);
        router.push("/task/"+id);
    }

    return (
        <div>
            <h1 className="text-2xl text-center mb-2">Edit Task: {task.title}</h1>
            <form 
                className='flex flex-col items-center'
                onSubmit={handleSubmmit}
            > 
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='border border-gray-400 p-2 mb-4 w-1/3'
                />
                <textarea
                    placeholder="Description"
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    className='border border-gray-400 p-2 mb-4 w-1/3'
                />
                <button type="submit"
                className='bg-green-500 hover:bg-green-400 px-5 py-2 text-white font-bold rounded-sm inline-flex items-center'
                >Save Task</button>
            </form>
        </div>
    );
}
