// app/dashboard/page.js
"use client";

import { useAuth } from "../../context/AuthContext";  // Importa el hook personalizado para usar el contexto
import { useEffect } from "react";
import { useRouter } from "next/navigation";  // Para redirigir a la página de login si no hay usuario

export default function DashboardPage() {
  const { user, logout } = useAuth();  // Obtén el usuario actual y la función de logout del contexto
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");  // Redirige al login si no hay usuario
    }
  }, [user, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Bienvenido, {user?.username}</h1>
      <button onClick={logout} className="bg-red-500 text-white p-2 rounded">
        Cerrar sesión
      </button>
    </div>
  );
}
