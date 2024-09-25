"use client";
import { useTasks } from '../context/TaskContext';
import Link from 'next/link';

export default function Home() {
  const { tasks } = useTasks();
  
  return (
    <div>
      <div className="flex  justify-center mb-4">
        <h1 className="text-4xl">Mi New Site</h1>
        </div>

      <div className="grid grid-cols-4 gap-4">
        {tasks.map((task) => (
        <div key={task.id} className="flex flex-col items-start bg-blue-500 p-4">
          <ul>
            <li  className="text-2xl mb-2 text-bold">{task.title}</li>
            <li className='mb-2'>{task.description}</li>
            <li
              className="text-black bg-green-400 hover:bg-green-400 px-3 py-1 text-white font-bold rounded-xl inline-flex items-center cursor-pointer">
                <Link href={`/task/${task.id}`}> 
                See Task
                </Link>
            </li>
          </ul>
        </div>
        ))}
      </div>
    </div>
  );
}
