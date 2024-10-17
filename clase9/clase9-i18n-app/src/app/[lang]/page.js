import { getDictionary }  from './dictionaries';
import Link from "next/link";


export default async function Page({params: {lang}}){
    const dict = await getDictionary(lang);

    return(
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
            <h1>{lang}</h1>
            <span className='text-center text-4xl'>{dict.title}</span>
            <span className='text-center text-4xl'>{dict.descripiton}</span>
            <Link href={`/${lang}/about`} className='text-center text-4xl'>{dict.links.aboutUs}</Link>
            <Link href={`/`} className='text-center text-4xl'>{dict.links.index}</Link>
        </div>
    );
}