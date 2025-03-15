import React from "react";
import Child from "./Child";

function Parent() {
  function displayName(name) {
    alert(name + "👋🏻");
  }
  function getUser() {
    alert("getUser( ) called ✅");
  }
  return (
    <div>
      <h1>Parent Component</h1>
      <Child displayName={displayName} name="Skyy" getUser={getUser} />
      <Child displayName={displayName} name="Soumadip" getUser={getUser} />
      <Child displayName={displayName} name="Akash" getUser={getUser} />
    </div>
  );
}

export default Parent;
