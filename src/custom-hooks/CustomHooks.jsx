import React from "react";
import useToggle from "./useToggle";

function CustomHooks() {
  const [value, toggleValue] = useToggle(true);
  const [data, setData] = useToggle(true);
  console.log("val - ", value);
  return (
    <div>
      <button onClick={toggleValue}>Toggle Heading</button>
      <button onClick={() => toggleValue(true)}>Show Heading</button>
      <button onClick={() => toggleValue(false)}>Hide Heading</button>
      {value ? <h2>Customs Hooks in ReactJs 🪝</h2> : null}
      <hr />
      <button onClick={setData}>Toggle 2nd Heading</button>
      <button onClick={() => setData(true)}>Show 2nd Heading</button>
      <button onClick={() => setData(false)}>Hide 2nd Heading</button>
      {data ? <h2>Second Heading..</h2> : null}
    </div>
  );
}

export default CustomHooks;
