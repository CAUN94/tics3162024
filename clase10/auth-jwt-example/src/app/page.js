import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Inicio</h1>
      <Link href="/login" className='block'>Entrar</Link>
      <Link href="/register" className='block'>Registrar</Link>
    </div>
  );
}
