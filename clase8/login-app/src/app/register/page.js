// app/register/page.js
"use client";

import { useState } from "react";
import { useAuth } from "../../context/AuthContext";  // Importa el hook personalizado para usar el contexto

export default function RegisterPage() {
  const [username, setUsername] = useState("");  // Estado para el nombre de usuario
  const [password, setPassword] = useState("");  // Estado para la contraseña
  const { register } = useAuth();  // Obtén la función de registro del contexto

  // Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();  // Previene el comportamiento por defecto del formulario
    register({ username, password });  // Llama la función de registro con los datos
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Registro</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">
          Registrarse
        </button>
      </form>
      <p className="mt-4">
        ¿Ya tienes cuenta? <a href="/" className="text-blue-500">Inicia sesión aquí</a>
      </p>
    </div>
  );
}
