export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-red-100 p-4 flex">
        {children}
      </body>
    </html>
  );
}
