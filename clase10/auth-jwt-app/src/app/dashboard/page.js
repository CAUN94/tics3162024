"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      setUsername(decodedToken.username);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div>
      <h1>Bienvenido, {username}</h1>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}
