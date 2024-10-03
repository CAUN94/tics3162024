import { useState } from "react";

export default function Accordion() {
    
    const [activeIndex, setActiveIndex] = useState(0)

    return(
        <div className="bg-yellow-300 p-4 text-center text-xl flex justify-center gap-2">
           <Panel title="Titulo 1" isActive={activeIndex == 0} onShow = {() => setActiveIndex(0)} />
           <Panel title="Titulo 2" isActive={activeIndex == 1} onShow = {() => setActiveIndex(1)} />
           <Panel title="Titulo 3" isActive={activeIndex == 1} onShow = {() => setActiveIndex(0)} />
           <Panel title="Titulo 4" isActive={activeIndex == 0} onShow = {() => setActiveIndex(1)} />
           <Panel title="Titulo 5" isActive={activeIndex == 1} onShow = {() => setActiveIndex(1)} />
        </div>
    );

    function Panel({title,isActive,onShow}){
        return(
            <div className="bg-blue-300 p-4 text-center w-1/5">
                <h2>{title}</h2>
                {isActive ? (<p>This Panel is Active</p>) : (<button onClick={onShow}>Show</button>)} 
                
            </div>
        );
    }

}