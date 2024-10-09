import { TaskProvider } from "../context/TaskContext";

export const metadata = {
  title: "CRUD App",
  description: "APP CRUD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <link
            href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
            rel="stylesheet"
          />
      </head>
      <body className="bg-green-200 p-4 text-xl">
        <TaskProvider>
          {children}
        </TaskProvider>
      </body>
    </html>
  );
}
