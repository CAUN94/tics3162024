"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTasks } from '../context/TaskContext';

export function NavBar() {
    const { tasks } = useTasks();
    const router = useRouter();

    return (
        <header className="flex items-center bg-blue-400 px-28 py-3 mb-2">
            <Link href="/">
                <h1 className="font-black text-3xl text-white">Task App</h1>
            </Link>

            <span className="ml-4 text-xl text-white font-bold">{tasks.length} tasks</span>

            <div className="flex-grow text-right">
                <button
                className="bg-green-500 hover:bg-green-400 px-5 py-2 text-white font-bold rounded-sm inline-flex items-center"
                onClick={() => router.push("/new")}
                >
                Add Task
                </button>
            </div>
        </header>
    );
}