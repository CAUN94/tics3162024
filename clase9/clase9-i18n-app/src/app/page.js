import Link from 'next/link';

export default function Home() {
  return (
    <div className="
      text-6xl
      bg-red-200
      h-screen
      flex
      flex-col
      gap-3
      justify-center
      items-center
      align-middle
    ">
      <h1 className="mb-2">i18n</h1>
      <Link href="en" className="text-4xl">English</Link>
      <Link href="es" className="text-4xl">Español</Link>
      <Link href="de" className="text-4xl">Deutsch</Link>
      <Link href="fr" className="text-4xl">Français</Link>
      <Link href="it" className="text-4xl">Italiano</Link>
    </div>
  );
}
