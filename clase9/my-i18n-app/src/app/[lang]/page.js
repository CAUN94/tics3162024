import { getDictionary } from './dictionaries';
import Link from 'next/link';

export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <div className='text-center text-4xl h-screen flex flex-col items-center justify-center'
    >
      <h1>{dict.title}</h1>
      <p>{dict.description}</p>
      <Link className='text-2xl' href={`/${lang}/about`}> 
        {dict.links.aboutUs}
        </Link>
    </div>
  );
}
