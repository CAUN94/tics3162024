export default function Home() {
  return (
    <div>
      <h1>Bienvenido a {process.env.NEXT_PUBLIC_SITE_TITLE}</h1>
      <p>Por favor, inicia sesión o regístrate para acceder al dashboard.</p>
    </div>
  );
}
