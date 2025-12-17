function Clicker(){

    function handleClick(){
        console.log("Clicked the button");
    }

    function handleHover(){
        console.log("Hovered");
    }

    return (
        <div>
            <p>Click the Button</p>

            <button onClick={handleClick}>Click</button>
            
            <p style={{color: "red", border: "2px solid blue"}} onMouseOver={handleHover}>Hover Over Me</p>
        </div>
    )

}

export default Clicker