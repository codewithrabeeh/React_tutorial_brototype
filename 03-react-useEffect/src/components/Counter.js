import React, {useState,useEffect} from "react";

function Counter(){
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    useEffect(() => {
        console.log('Mounting....')
        console.log('Updating... ' + count)     
        // console.log('Count2...' + count2)
    },  []) 
   
    return(
        <div>
            <button onClick={() => setCount(count+1)}>Increament</button>
            <h1>Hello I am a Counter Component & count = {count} </h1>

            <button onClick={() => setCount2(count2+1)}>Increament</button>
            <h1>Hello I am a Counter Component 2 & count 2 = {count2} </h1>
        </div>
    )
}

export default Counter; 