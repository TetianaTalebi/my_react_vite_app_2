export default function DoubleDice(){

    // Generate 2 random numbers from 1 to 3
    const num1 = Math.floor(Math.random()*3)+1;
    const num2 = Math.floor(Math.random()*3)+1;

    return (
        <div>
            <h2>Double Dice</h2>
            {num1===num2 && <h3>You win!</h3>}
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    )

}