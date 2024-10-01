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
            <h1>New Task</h1>
            <form 
                onSubmit={handleSubmmit}
            > 
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Save Task</button>
            </form>
        </div>
    );
}
