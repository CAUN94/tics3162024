import { promises as fs } from "fs";
import path from "path";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { email, password } = await req.json();

  // Leer el archivo de usuarios
  const filePath = path.join(process.cwd(), "src/data/users.json");
  const fileData = await fs.readFile(filePath, "utf8");
  const users = JSON.parse(fileData);

  // Buscar el usuario en el archivo JSON
  const user = users.find((u) => u.email === email);
  // Verificar la contraseña
  if (user && (password == user.password)) {
    // Generar el JWT
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return new Response(JSON.stringify({ token, email }), {
      status: 200,
    });
  } else {
    return new Response(JSON.stringify({ message: "Credenciales inválidas." }), {
      status: 401,
    });
  }
}
