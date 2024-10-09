// app/page.js
"use client";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";  // Importa el hook personalizado para usar el contexto

export default function HomePage() {
  const [username, setUsername] = useState("");  // Estado para el nombre de usuario
  const [password, setPassword] = useState("");  // Estado para la contraseña
  const { login } = useAuth();  // Obtén la función de login del contexto

  // Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();  // Previene el comportamiento por defecto del formulario
    login({ username, password });  // Llama la función de login con los datos
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-3">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded m-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded m-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded m-2">
          Login
        </button>
      </form>
      <p className="mt-4">
        ¿No tienes cuenta? <a href="/register" className="text-blue-500">Regístrate aquí</a>
      </p>
    </div>
  );
}
