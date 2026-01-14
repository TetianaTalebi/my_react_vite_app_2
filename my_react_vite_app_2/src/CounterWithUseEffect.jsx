import { useState, useEffect } from "react";

export default function CounterWithUseEffect(){

    const [count, setCount] = useState(0);

    const [name, setName] = useState("");

    useEffect(function myEffect(){
        console.log("My effect was called!");
    }, [name, count]);

    // Define a function to update count
    const increment = () => setCount(c => c+1);

    // Define a function to update name
    const handleChange = (e) => setName(e.target.value);

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>+1</button>

            <h2>{name}</h2>
            <input type="text" value={name} onChange={handleChange} />
        </div>
    );

}