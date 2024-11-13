"use client";
import React, { useState } from 'react';

export default function Home() {
  const [students, setStudents] = useState([
    { nombre: 'Ana Torres', promedio: 5.6 },
    { nombre: 'Carlos Diaz', promedio: 6.3 },
    { nombre: 'Luis Hernandez', promedio: 4.8 },
  ]);

  const [name, setName] = useState('');
  const [grades, setGrades] = useState({ grade1: '', grade2: '', grade3: '' });

  const handleGradeChange = (e) => {
    setGrades({ ...grades, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del nombre: mínimo 3 letras
    let trimmedName = name.trim();
    if (trimmedName.length < 3) {
      alert('Error: El nombre debe tener al menos 3 letras.');
      return;
    }


    // Validación de notas
    let sum = 0;
    for (let key in grades) {
      const grade = parseFloat(grades[key]);

      if (!grades[key]) {
        alert('Error: Todas las notas son requeridas.');
        return;
      }

      if (isNaN(grade) || grade < 1 || grade > 7) {
        alert('Error: Todas las notas deben ser números entre 1 y 7.');
        return;
      }

      sum += grade;
    }

    const average = sum / 3;
    const newStudent = { nombre: trimmedName, promedio: average.toFixed(1) };
    setStudents([...students, newStudent]);

    // Limpiar el formulario después de enviar
    setName('');
    setGrades({ grade1: '', grade2: '', grade3: '' });
  };


  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Registro de Notas de Estudiantes</h1>
      <form onSubmit={handleSubmit} className="w-80 p-4 bg-white rounded shadow-md">
        <label className="block mb-2">
          Nombre del Estudiante:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full mt-1"
            required
          />
        </label>
        <label className="block mb-2">
          Nota 1:
          <input
            type="number"
            name="grade1"
            value={grades.grade1}
            onChange={handleGradeChange}
            className="border p-2 w-full mt-1"
            required
            min="1"
            max="7"
          />
        </label>
        <label className="block mb-2">
          Nota 2:
          <input
            type="number"
            name="grade2"
            value={grades.grade2}
            onChange={handleGradeChange}
            className="border p-2 w-full mt-1"
            required
            min="1"
            max="7"
          />
        </label>
        <label className="block mb-2">
          Nota 3:
          <input
            type="number"
            name="grade3"
            value={grades.grade3}
            onChange={handleGradeChange}
            className="border p-2 w-full mt-1"
            required
            min="1"
            max="7"
          />
        </label>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
        >
          Registrar Nota
        </button>
      </form>

      <div className="mt-6 w-80 p-4 bg-gray-200 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">Estudiantes Registrados</h3>
        {students.length === 0 ? (
          <p>No hay estudiantes registrados</p>
        ) : (
          students.map((student, index) => (
            <div key={index} className="border-b border-gray-300 py-2">
              <p>
                <strong>Nombre:</strong> {student.nombre}
              </p>
              <p>
                <strong>Promedio:</strong> {student.promedio}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
