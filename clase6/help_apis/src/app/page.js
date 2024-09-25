import PicsumImages from '../components/PicsumImages';
import Posts from '../components/Posts';


export default function Home() {
  return (
    <div className="w-screen flex justify-center items-center">
      <div className='flex flex-col items-center gap-4'>
          <span className="text-bold text-4xl">Hola Mundo</span>
          <span className="text-bold text-2xl">Picsum Image</span>
          <PicsumImages />
          <span className="text-bold text-2xl">Post JSON</span>
          <Posts />
        </div>
    </div>
  );
}
