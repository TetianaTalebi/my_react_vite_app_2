
// values = object

export default function ListPicker({values}){

    
    const randIdx = Math.floor(Math.random()*Object.keys(values).length);
    console.log(Object.keys(values));
   

    const randElementProperty = values[Object.keys(values)[randIdx]];

    console.log(randElementProperty);

    return (
        <div>
            <p>The list of object keys: {Object.keys(values)}</p>
            <p>The random key is: {Object.keys(values)[randIdx]}</p>

            <p>The list of object properties: {Object.values(values)}</p>
            <p>Random property is: {randElementProperty}</p>
        </div>
    )
}