import { promises as fs } from "fs";
import path from "path";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { username, password } = await req.json();

  // Leer el archivo de usuarios
  const filePath = path.join(process.cwd(), "src/data/users.json");
  const fileData = await fs.readFile(filePath, "utf8");
  const users = JSON.parse(fileData);

  // Verificar si el usuario ya existe
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return new Response(
      JSON.stringify({ message: "El usuario ya existe." }),
      { status: 400 }
    );
  }

  // Encriptar la contraseña
  const hashedPassword = await bcrypt.hash(password, 10);

  // Agregar el nuevo usuario
  const newUser = { username, password: hashedPassword };
  users.push(newUser);

  // Guardar los usuarios en el archivo
  await fs.writeFile(filePath, JSON.stringify(users));

  // Generar el JWT
  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return new Response(JSON.stringify({ token, username }), {
    status: 200,
  });
}
