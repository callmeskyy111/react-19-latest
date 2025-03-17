import React from "react";
import StudentComp from "./StudentComp";

function ClassComp() {
  return (
    <div
      style={{
        backgroundColor: "skyblue",
        padding: 10,
        color: "brown",
        borderRadius: "5px",
      }}>
      <h2>Class Component</h2>
      <StudentComp />
    </div>
  );
}

export default ClassComp;
