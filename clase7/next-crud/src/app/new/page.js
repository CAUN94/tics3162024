"use client";
import { useState } from 'react';  
import { useTasks } from "../../context/TaskContext";
import { useRouter } from "next/navigation";


export default function Home() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { addTask } = useTasks();
    const router = useRouter();

    const handleSubmmit = (e) => {
        e.preventDefault();
        addTask(title, description);
        router.push("/");
    }

    return (
        <div>
            <h1 className='text-center my-4 text-4xl text-red-500'>New Task</h1>
            <div className='w-full max-w-lg p-6 bg-white rounded-lg shadow-md mx-auto'>
                <form 
                    onSubmit={handleSubmmit}
                    className='flex flex-col space-y-4'
                > 
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    />
                    <textarea
                        placeholder="Description"
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)}
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    />
                    <button type="submit" className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Save Task</button>
                </form>
            </div>
        </div>
    );
}
