"use client"
import React from 'react';
import { useEffect,useState } from 'react';

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch("https://jsonplaceholder.typicode.com/posts");
          const data = await response.json();
          setPosts(data.slice(0, 50)); // Limita a las primeras 10 publicaciones
        };
    
        fetchPosts();
      }, []);

      return(
        <div className='grid grid-cols-3 gap-4 w-2/3'>
            {posts.map((post) => (
                <div key={post.id} className='bg-white px-4 py-2'>
                    <h2 className='text-bold text-xl mb-2'>{post.title}</h2>
                    <p className='text-base'>{post.body}</p>
                </div>
            ))}
        </div>
      );
}