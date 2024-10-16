export async function generateStaticParams() {
    return [{ lang: 'es' }, { lang: 'en' }, { lang: 'de' }];
  }
  
  export default function RootLayout({ children, params }) {
    return (
      <html lang={params.lang}>
        <body>{children}</body>
      </html>
    );
  }
  