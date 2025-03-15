import React, { useRef, useState } from "react";
function UseRef() {
  const inputRef = useRef(null);
  const h1Ref = useRef(null);
  const [changeH1, setChangeH1] = useState(false);

  const handleRef = () => {
    inputRef.current.focus();
    inputRef.current.style.color = "red";
    inputRef.current.placeholder = "Placeholder changed!";
    inputRef.current.style.backgroundColor = "yellow";
    console.log("inputRef: ", inputRef);
  };

  const toggleRef = () => {
    if (inputRef.current.style.display !== "none") {
      inputRef.current.style.display = "none";
    } else {
      inputRef.current.style.display = "inline";
    }
    console.log("inputRef: ", inputRef);
  };

  const h1Handler = () => {
    console.log("h1Ref: ", h1Ref);
    h1Ref.current.style.color = "blue";
  };

  const h1StateChanger = () => {
    setChangeH1(!changeH1);
  };

  return (
    <div>
      <h2>useRef( ) Explained... 📝</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter user-name here"
        style={{
          width: "15em",
          height: "3em",
          padding: "5px",
          margin: "5px",
          borderRadius: "5px",
          border: "none",
        }}
      />
      <button onClick={handleRef}>Focus on INPUT</button>
      <button onClick={toggleRef}>Toggle INPUT</button>
      <button onClick={h1Handler}>Edit H1</button>
      <button onClick={h1StateChanger}>Change H1 State</button>
      <br />
      <h1 ref={h1Ref}>This is a H1</h1>
      <h1 style={{ color: changeH1 ? "red" : "green" }}>
        This is another h1, to be changed by state-update
      </h1>
    </div>
  );
}

export default UseRef;
