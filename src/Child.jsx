import React from "react";

function Child({displayName,name, getUser}) {
    //const name = "Skyy";
  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={()=>displayName(name)}>Display Name</button>
      <button onClick={getUser}>Get User</button>
    </div>
  );
}

export default Child;
