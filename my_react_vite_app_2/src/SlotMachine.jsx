export default function SlotMachine(){

    const val1 = Math.floor(Math.random()*3)+1;

    const val2 = Math.floor(Math.random()*3)+1;

    const val3 = Math.floor(Math.random()*3)+1;

    const isWinner = val1 === val2 && val1 === val3;

    return (
        <div>
            <h2 style={{color: isWinner? "lime" : "coral"}}>{isWinner? "You win!" : "You loose!"}</h2>
            <h2>{val1} - {val2} - {val3}</h2>
            {isWinner&&<h1 style={{color:"lime"}}>Congrats!</h1>}

        </div>
    )
}