
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <title>{process.env.NEXT_PUBLIC_SITE_TITLE || 'Default Title'}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
