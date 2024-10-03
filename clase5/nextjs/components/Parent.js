import { useState } from "react";

export default function ParentComponent() {
    const [sharedState,setSharedState] = useState('Hello from Parent')
    const [count,setCount] = useState(0);
    return(
        <div className="bg-purple-300 p-4 text-center text-xl">
            <h1 className="text-center">{sharedState} {count}</h1>
            <button onClick={() => setCount(count + 1)} className="mx-2">Increment</button>
            <ChildComponent sharedState={sharedState} count={count} />
            <ChildComponent sharedState={sharedState} count={count} />
            <ChildComponent sharedState={sharedState} count={count} />
        </div>
    );

    function ChildComponent({sharedState,count}){
        return(
            <div className="bg-green-100 p-4 text-center">
                <h2>Child Component Received: {sharedState} {count}</h2>
            </div>
        );
    }

}