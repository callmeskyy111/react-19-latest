import React from "react";
import SubjectComp from "./SubjectComp";

function StudentComp() {
  return (
    <div
      style={{
        backgroundColor: "green",
        padding: 10,
        color: "brown",
        borderRadius: "5px",
      }}>
      <h2>Student Component</h2>
      <SubjectComp/>
    </div>
  );
}

export default StudentComp;
