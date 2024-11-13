export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
