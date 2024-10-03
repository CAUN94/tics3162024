"use client"
import Link from "next/link";
import { useTasks } from "../context/TaskContext";

export default function Home() {
  const {tasks} = useTasks();
  return (
    <div>
      <div className="flex justify-center mb-4">
        <h1>First CRUD Page</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {tasks.map((task) => (
        <div key={task.id} className="bg-white p-2">
          <ul>
            <li>Title: {task.title}</li>
            <li>Description: {task.description}</li>
            <li className="mt-2 bg-red-500 p-1 text-center">
              <Link href={"/task/"+ task.id}>
                View
              </Link>
            </li>
          </ul>
        </div>
      ))}
      </div>
    </div>  );
}
