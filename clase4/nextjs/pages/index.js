import React from 'react';
import Header from '../components/Header';
import ToDoList from '../components/ToDoList';
import DynamicInput from '../components/DynamicInput';

export default function HomePage() {
  return (
    <div>
      <Header  title ='Hola Mundo'/>
      <ToDoList />
      <DynamicInput />
    </div>
  );
}
