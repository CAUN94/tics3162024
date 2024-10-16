"use client";
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export default function Home() {
  return (
    <div className='text-center text-4xl h-screen flex flex-col items-center justify-center'
    >
      Elegir Idioma
      <div className='flex flex-col'
      >
      <Link className='text-2xl' href="/es">
        Español
      </Link>
      <Link className='text-2xl' href="/en">
        Inglés
      </Link>
      <Link className='text-2xl' href="/de">
        Alemán
      </Link>
      </div>
    </div>
  );
}
