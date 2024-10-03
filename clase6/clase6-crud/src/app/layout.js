import { TaskProvider } from "../context/TaskContext";
import { NavBar } from "../components/NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-red-100 p-4">
        <TaskProvider>
          <NavBar />
          {children}
        </TaskProvider>
      </body>
    </html>
  );
}
