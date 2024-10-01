"use client";
import { useTasks } from '../context/TaskContext';
import Link from 'next/link';

export default function Home() {
  const { tasks } = useTasks();
  return (
    <div>
      <div>
        <h1>Mi New Site</h1>
      </div>

      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <ul>
              <li>{task.title}</li>
              <li>{task.description}</li>
              <li>
                <div className='flex justify-start gap-1'>
                  <Link href={`/task/${task.id}`}>
                    See Task 
                  </Link>
                  <Link href={`/edit/${task.id}`}>
                    Edit Task 
                  </Link>
                  <button 
                  id = {task.id}
                  >
                    Delete Task 
                  </button>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
