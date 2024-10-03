"use client";
import { useState } from 'react';  
import { useTasks } from "../../../context/TaskContext";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Link from 'next/link';

export default function TaskDetailPage(){
    const { tasks,deleteTask} = useTasks();
    const router = useRouter();
    const { id } = useParams(); 
    const task = tasks.find(task => task.id === parseInt(id));
    const handleDelete = (e) => {
        e.preventDefault();
        if(confirm("Are you sure you want to delete this task?")){
          deleteTask(e.target.id);
        }
      }
    if(!task){
        return <h1>Task not found</h1>
    }

    return(
        <div className='bg-gray-200 p-4 rounded-lg text-center w-1/2 mx-auto mt-4'>
            <div>
                <h1>Task: {task.title}</h1>
            </div>
            <div>
                <p>Description: {task.description}</p>
            </div>
            <div className='flex gap-2 justify-center'>
                <Link href={`/edit/${task.id}`}>
                    Edit Task
                </Link>
                <button 
                id = {task.id}
                onClick={handleDelete}
                >Delete</button>
            </div>
            <Link href='/'>
                    Go back
            </Link>
        </div>
    );
}