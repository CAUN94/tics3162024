import {useState} from 'react';

export default function Gallery(){
    const images = [
        {url: 'https://i.imgur.com/vbTrZRK.jpeg', alt:"Neurocirugía"},
        {url: 'https://i.imgur.com/vxNe256.jpeg', alt:"Dentista"},
        {url: 'https://i.imgur.com/4zZTotK.jpeg', alt:"Masaje"},
    ];

    const [index,setIndex] = useState(0)

    function handleNext(){
        if (index+1 < images.length){
            setIndex(index+1)
        } else {
            setIndex(0)
        }
    }

    return (
        <div className='p-4 bg-red-200 flex flex-col justify center'>
            <img className='mx-auto mb-2 h-80' src={images[index].url} alt={images[index].alt} />
            <button
            onClick={handleNext}
            className="bg-blue-300 hover:bg-blue-700 w-1/4 mx-auto text-white font-bold py-2 px-4 rounded">
                Siguiente
            </button>
        </div>
    );
}