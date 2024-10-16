import { getDictionary } from '../dictionaries';
// Link
import Link from 'next/link';


export default async function AboutPage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <div className="'text-center text-4xl h-screen flex flex-col items-center justify-center">
      <h1>{dict.links.aboutUs}</h1>
      <p>{dict.example}: {lang}</p>
        <Link className='text-2xl' href="/">
            {dict.return}
        </Link>

    </div>
  );
}
