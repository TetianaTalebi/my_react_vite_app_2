export default function Die({numSides}) {

    console.log(`numSides=${numSides}`);

    const roll = Math.floor(Math.random()*numSides)+1;

    return (
        <>
            <p>Number of sides: {numSides} - Die roll: {roll} </p>
        </>
    ) 
}