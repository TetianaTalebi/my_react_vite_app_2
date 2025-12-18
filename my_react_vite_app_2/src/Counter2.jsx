import { useState } from "react";

function Counter2() {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount((currentCount)=>currentCount+1);

  return (
    <div style={{ fontSize: "40px", color: "lime" }}>
      <p>Count: {count}</p>
      <button
        style={{
          border: "4px solid lime",
          color: "lime",
          outline: "none",
          fontWeight: "bold",
        }}
        onClick={incrementCount}
      >
        +1
      </button>
    </div>
  );
}
export default Counter2;
