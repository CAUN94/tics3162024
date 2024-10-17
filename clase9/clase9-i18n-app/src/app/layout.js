export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>i18n</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css"
          rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
