
// values = array

export default function ListPicker({values}){

    // randIdx = random index from values array
    const randIdx = Math.floor(Math.random()*values.length);
    const randElement = values[randIdx];

    return (
        <div>
            <p>The list of values: {values}</p>
            <p>Random element is: {randElement}</p>
        </div>
    )
}