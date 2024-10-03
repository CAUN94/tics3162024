import React from 'react';
// import AnotherToogle from '../components/AnotherToogle';
import ToggleButton from '../components/Toogle.js';
import Gallery from '../components/Gallery.js';
import Modal from '../components/Modal.js';
import Parent from '../components/Parent.js';
import AnotherParent from '../components/AnotherParent.js';
import ToDoList from '../components/ToDoList';


export default function HomePage() {
  return (
    <>
      <head>
        <title>Me React/Next Page</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <div className='bg-blue-200 p-4 mb-2'>
          <h1 className='text-4xl text-center mb-2' >Welcome to Next.js</h1>
          <p className='text-center bg-green-300 p-4'>Get Started Again</p>
        </div>
        <ToggleButton />
        <Gallery />
        <Modal />
        <Parent />
        <AnotherParent />
        <ToDoList />
      </body>
    </>
  );
}
