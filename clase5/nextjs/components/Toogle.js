import { useState } from "react";

export default function ToggleButton(){
    const [isToggled,setIsToggled] = useState(true)
    
    function handleToggle(){
        setIsToggled(!isToggled)
    }

    return (<div>
        <div className="p-4 bg-red-200 flex flex-col justify center">
            <button
            onClick={handleToggle}
            className="bg-blue-200 hover:bg-blue-700 w-1/4 mx-auto text-white font-bold py-2 px-4 rounded">
                {isToggled ? 'Hide' : 'Show'} Details
            </button>
            {isToggled && <p className='mt-4 text-2xl text-green-900 text-center'> You can see me</p>}
        </div>
    </div>)
}