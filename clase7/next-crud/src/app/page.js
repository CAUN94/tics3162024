"use client";
import { useTasks } from '../context/TaskContext';
import Link from 'next/link';

export default function Home() {
  const { tasks,deleteTask } = useTasks();

  const handleDelete = (e) => {
    e.preventDefault();
    if(confirm("Are you sure you want to delete this task?")){
      deleteTask(e.target.id);
    }
  }
  return (
    <div>
      <div>
        <h1 className='text-center my-4 text-4xl text-red-500'>Mi New Site</h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
        {tasks.map((task) => (
          <div className='bg-gray-200 p-4 rounded-lg text-center' key={task.id}>
            <ul>
              <li>{task.title}</li>
              <li>{task.description}</li>
              <li>
                <div className='flex gap-1 justify-center mx-auto w-full'>
                  <Link href={`/task/${task.id}`} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full'>
                    See Task 
                  </Link>
                  <Link href={`/edit/${task.id}`} className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full'>
                    Edit Task 
                  </Link>
                  <button 
                  id = {task.id}
                  onClick={handleDelete}
                  className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'
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
