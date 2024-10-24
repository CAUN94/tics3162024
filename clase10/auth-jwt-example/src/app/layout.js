export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
        {/* tailwind script */}
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-900 p-2 text-white text-2xl">
        {children}
      </body>
    </html>
  );
}
