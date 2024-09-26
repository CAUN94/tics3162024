"use client";
import { useState } from 'react';  
import { useTasks } from "../../../context/TaskContext";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Link from 'next/link';

export default function TaskDetailPage(){
    const { tasks, deleteTask } = useTasks();
    const router = useRouter();
    const { id } = useParams(); 
    const task = tasks.find(task => task.id === parseInt(id));
    if(!task){
        return <h1>Task not found</h1>
    }
    const handleDelete = (e) => {
        e.preventDefault();
        if (confirm("Are you sure you want to delete this task?")){
            deleteTask(task.id);
            router.push("/");
        }
      }

    return(
        <div className='flex flex-col items-center'>
            <div className="flex  justify-center mb-4">
                <h1 className="text-4xl">Task: {task.title}</h1>
            </div>
            <div className='bg-blue-500 p-4 mb-4'>
                <p className='text-xl'>Description: {task.description}</p>
            </div>
            <div className='flex gap-4 mb-4'>
                <Link className="bg-yellow-500 hover:bg-yellow-400 px-5 py-2 text-white font-bold rounded-sm inline-flex items-center" href={`/edit/${task.id}`}>
                    Edit Task
                </Link>
                <button className="bg-red-500 hover:bg-red-400 px-5 py-2 text-white font-bold rounded-sm inline-flex items-center" 
                id = {task.id}
                onClick={handleDelete}>Delete</button>
            </div>
            <Link href='/' className='bg-green-500 text-white px-5 py-2 font-bold rounden-sm'>
                    Go back
            </Link>
        </div>
    );
}