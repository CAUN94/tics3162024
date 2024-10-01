"use client";
import { useState } from 'react';  
import { useTasks } from "../../../context/TaskContext";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Link from 'next/link';

export default function TaskDetailPage(){
    const { tasks} = useTasks();
    const router = useRouter();
    const { id } = useParams(); 
    const task = tasks.find(task => task.id === parseInt(id));
    if(!task){
        return <h1>Task not found</h1>
    }

    return(
        <div>
            <div>
                <h1>Task: {task.title}</h1>
            </div>
            <div>
                <p>Description: {task.description}</p>
            </div>
            <div>
                <Link href={`/edit/${task.id}`}>
                    Edit Task
                </Link>
                <button 
                id = {task.id}
                >Delete</button>
            </div>
            <Link href='/'>
                    Go back
            </Link>
        </div>
    );
}