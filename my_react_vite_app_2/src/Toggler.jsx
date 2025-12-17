import { useState } from "react"
import './Toggler.css'

function Toggler(){

    const [isHappy, setIsHappy] = useState(true);

    function toggleIsHappy(){
        setIsHappy(!isHappy);
    }

    return <p onClick={toggleIsHappy} className="Toggler">{isHappy? "😄":"🙃"}</p>
}
export default Toggler