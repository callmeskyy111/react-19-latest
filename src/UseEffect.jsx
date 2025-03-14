import React, { useEffect, useState } from "react";

function UseEffect() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Fx Called Once ✅");
  }, []);
  useEffect(() => {
    console.log("Fx Called on COUNTER change 🔄️");
  }, [counter]);
  return (
    <div>
      <h2>useEffect Hook 🪝</h2>
      <button onClick={() => setCounter((prev) => prev + 1)}>
        Counter: {counter}{" "}
      </button>
    </div>
  );
}
export default UseEffect;
