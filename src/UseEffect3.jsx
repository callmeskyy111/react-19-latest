// LifeCycle events with useEffect()

import React, { useEffect } from "react";

function UseEffect3({ count }) {
  useEffect(() => {
    console.log("Mounting Phase Only... 🚀");
  }, []);

  useEffect(() => {
    console.log(`Update Phase Only... 🔧`);
  }, [count]);

  useEffect(() => {
    return () => console.log(`Unmounting Phase Only... 🧹`);
  }, []);

  return (
    <div>
      <h1>UseEffect with 'props' 🔄️</h1>
      <h2>Count: {count}➕</h2>
    </div>
  );
}

export default UseEffect3;

//! PARENT COMPONENT ⬇️
// function YseEffectParent() {
//   const [count, setCount] = useState(0);
//   const [display, setDisplay] = useState(true);
//   return (
//     <div>
//       <h2>UseEffect 🔁⚛️</h2>
//       {display && <UseEffect3 count={count}/>}

//       <button onClick={() => setCount((prevCount) => prevCount + 1)}>
//         Counter
//       </button>
//       <button
//         title="toggle-display"
//         onClick={() => setDisplay((prevDisplay) => !prevDisplay)}>
//         {display ? "Hide Component❓👻" : "Show Component❔💡"}
//       </button>
//     </div>
//   );
// }
// export default UseEffectParent;
