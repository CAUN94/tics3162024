// app/layout.js
import { AuthProvider } from "../context/AuthContext";  // Importar el 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <AuthProvider>
          {children}  {/* Envolver la aplicación en el contexto de autenticación */}
        </AuthProvider>
      </body>
    </html>
  );
}
