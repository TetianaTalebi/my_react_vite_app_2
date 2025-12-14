export default function DoubleDice(){

    // Generate 2 random numbers from 1 to 3
    const num1 = Math.floor(Math.random()*3)+1;
    const num2 = Math.floor(Math.random()*3)+1;

    // Make code more readable
    const isWinner = num1 === num2;

    // Provide dynamic styles
    const styles = {color: isWinner ? "lime":"red"}

    return (
        <div style={styles}>
            <h2>Double Dice</h2>
            {isWinner && <h3>You win!</h3>}
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    )

}