
// Pass values of style properties as props
export default function Heading({text, color="snow", fontSize="40px"}) {

    return <h1 style={{color: color, fontSize: fontSize}}>{text}</h1>

}