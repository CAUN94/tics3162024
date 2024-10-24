"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });
          if(res.ok){
            alert('Ingresado correctamente');
          } else {
            alert('Credenciales inválidas');
          }
    }

    return (
        <div>
            <h1>Entrar</h1>
            <form onSubmit={handleLogin}>
                <input 
                    className="block mb-2 text-sm p-1 bg-gray-100 text-gray-900" 
                    type="text" placeholder="Correo"
                    onChange={(e) => setEmail(e.target.value)}
                     />
                <input 
                    className="block mb-2 text-sm p-1 bg-gray-100 text-gray-900"
                    type="password"
                    placeholder="Contraseña" 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <button type="submit">Ingresar</button>
            </form>
            <Link href="/" className="block">Inicio</Link>
        </div>
    );
}
