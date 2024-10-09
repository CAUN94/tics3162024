// context/AuthContext.js
"use client";  // Habilita el uso de cliente en React

import { createContext, useContext, useState } from "react";  // Importa las funciones y hooks necesarios
import { useRouter } from "next/navigation";  // Para redirigir entre páginas
import bcrypt from "bcryptjs";  // Librería para encriptar las contraseñas

const AuthContext = createContext();  // Crea el contexto de autenticación

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // Estado para el usuario actual
  const [users, setUsers] = useState([]);  // Estado para la lista de usuarios
  const router = useRouter();

  // Función de registro
  const register = async ({ username, password }) => {
    // Verificar si el usuario ya existe en la lista
    const existingUser = users.find((user) => user.username === username);

    if (existingUser) {
      alert("El usuario ya existe. Prueba con otro nombre de usuario.");
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);  // Encripta la contraseña
    const newUser = { username, password: hashedPassword };  // Crea un nuevo objeto de usuario

    // Actualiza la lista de usuarios y el estado con el nuevo usuario
    setUsers([...users, newUser]);
    setUser(newUser);
    router.push("/dashboard");  // Redirige al dashboard
  };

  // Función de login
  const login = async ({ username, password }) => {
    const storedUser = users.find((user) => user.username === username);  // Buscar el usuario en la lista

    if (!storedUser) {
      alert("El usuario no existe. Regístrate primero.");
      return;
    }

    // Comparar contraseñas encriptadas
    const isPasswordCorrect = await bcrypt.compare(password, storedUser.password);

    if (isPasswordCorrect) {
      setUser(storedUser);  // Si es correcto, establece el usuario en el estado
      router.push("/dashboard");  // Redirige al dashboard
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);  // Elimina el usuario actual del estado
    router.push("/");  // Redirige al login
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
