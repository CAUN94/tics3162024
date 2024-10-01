"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTasks } from '../context/TaskContext';

export function NavBar() {
    const { tasks } = useTasks();
    const router = useRouter();

    return (
        <header>
            <Link href="/">
                <h1>Task App</h1>
            </Link>

            <span>{tasks.length} tasks</span>

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