
// colors is an array of strings
export default function ColorList({colors}) {

    // elements is an array of elements
    const elements= [<p>Hello!</p>, <h1>Bye!</h1>, <input type="password" />];

    return (
        <div>
            <p>Color List</p>
            {elements}
            <ul>{colors.map(color=><li style={{color}}>{color}</li>)}</ul>
        </div>
    )

}