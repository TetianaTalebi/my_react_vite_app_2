import { useState } from "react";

function ScoreKeeper2({ targetNum = 6, numOfPlayers = 2 }) {
  const [score, setScore] = useState(new Array(numOfPlayers).fill(0));

  function incrementScore(id){
    setScore((oldArray) => {
      return oldArray.map((el, index) => {
        if (index === id) {
          return el + 1;
        } else {
          return el;
        }
      });
    });
  };

  function manageBtns(){
    for (let element of score){
      if (element === targetNum) return true;
    }
    return false;
  }

  function resetItAll(){
    setScore(new Array(numOfPlayers).fill(0));
  }

  
  return (
    <div style={{ fontSize: "40px", color: "lime" }}>
        <ul>
          {score.map((el, index) => {
            return (
              <li key={index} style={el === targetNum ? { color: "magenta" } : {}}>
                Player #{index + 1}:{el}
                <button disabled={manageBtns()} onClick={() => incrementScore(index)}>+1</button>
                {el === targetNum ? "Winner!" : ""}
              </li>
            );
          })}
        </ul>
          <button onClick={resetItAll}>Reset</button>
    </div>
  );
}
export default ScoreKeeper2;
