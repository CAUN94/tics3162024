"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTasks } from '../context/TaskContext';

export function NavBar() {
    const { tasks } = useTasks();
    const router = useRouter();

    return (
        <header className='flex justify-between items-center py-4 bg-green-500 px-10'>
            <div className='flex gap-2'>
                <Link href="/">
                    <h1>Task App</h1>
                </Link>
                <span>{tasks.length} tasks</span>
            </div>

            <div>
                <button 
                onClick={() => router.push("/new")}
                >
                Add Task
                </button>
            </div>
        </header>
    );
}