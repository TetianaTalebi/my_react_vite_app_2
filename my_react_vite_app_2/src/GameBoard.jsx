import { useState } from "react";

export default function GameBoard(){

    function generateGameBoard(){
        console.log('Making the initial game board!');
        return Array(5000);
    }

    const [board, setBoard] = useState(generateGameBoard);

    function handleClick(){
        setBoard('Hello!');
    }

    return(
        <button onClick={handleClick}>Click me!</button>
    )


}