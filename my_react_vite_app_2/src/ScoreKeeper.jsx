import { useState } from "react";

export default function ScoreKeeper(){

    // "scores" is an Object
    const [scores, setScores] = useState({p1Score: 0, p2Score: 0});

    function increaseP1Score(){
        setScores((oldScores) => {
            return {...oldScores, p1Score: oldScores.p1Score+1}
        })
    }

    function increaseP2Score(){
        setScores((oldScores) => {
            return {...oldScores, p2Score: oldScores.p2Score+1}
        })
    }

    return (
        <div style={{fontSize: '40px'}}>
            <p>Player #1 score: {scores.p1Score}</p>
            <p>Player #2 score: {scores.p2Score}</p>
            <button onClick={increaseP1Score}>Player #1: +1</button>
            <button onClick={increaseP2Score} >Player #2: +1</button>
        </div>
    );

}