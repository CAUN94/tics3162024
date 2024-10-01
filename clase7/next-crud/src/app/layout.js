import { TaskProvider } from '../context/TaskContext'; // Importa el TaskProvider
import { NavBar } from '../components/NavBar'; // Importa el componente NavBar

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>  
      <body className="bg-blue-100 p-4">
        <TaskProvider>
            <NavBar />
            {children}
          </TaskProvider>
      </body>
    </html>
  );
}
