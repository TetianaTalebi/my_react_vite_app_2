import { useState } from "react"
import './Toggler.css'

function Toggler(){

    const [isHappy, setIsHappy] = useState(true);

    const [num, setNum] = useState(5);

    function toggleIsHappy(){
        setIsHappy(!isHappy);
    }

    function incrementNum(){
        setNum(num+2);
    }

    return (
        <div>
            <p onClick={toggleIsHappy} className="Toggler">{isHappy? "😄":"🙃"}</p>
            <button style={{fontSize: '50px'}} onClick={incrementNum}>The number is: {num}</button>
        </div>
    ) 
}
export default Toggler