import React, { useRef } from "react";
import UserInput from "./UserInput";

// forwardRefs not needed in React19 and later versions..
function ForwardRef() {
  const inputRef = useRef(null);
  function updateInput() {
    console.log(`updateInput( ) called ✅`);
    inputRef.current.value = "Updated Text";
    inputRef.current.style.color = "green";
    inputRef.current.style.backgroundColor = "lightblue";
    inputRef.current.focus();
    console.log("inputRef: ", inputRef);
  }
  return (
    <>
      <h2>ForwardRef( )...</h2>
      <UserInput ref={inputRef} />
      <button onClick={updateInput}>Update Input Field</button>
    </>
  );
}

export default ForwardRef;
