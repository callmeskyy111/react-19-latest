import React, { useState } from "react";
import College from "./College";
import { SubjectCtxt } from "./context";

function ParentCtxt() {
  const [subject, setSubject] = useState("");
  return (
    <div
      style={{
        backgroundColor: "yellow",
        padding: 10,
        color: "brown",
        borderRadius: "5px",
      }}>
      <SubjectCtxt.Provider value={subject}>
        <select value={subject} onChange={(evt) => setSubject(evt.target.value)}>
          <option value="">Select Subject</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Science">Science</option>
          <option value="Social Studies">Social Studies</option>
        </select>
        <h1>Context API</h1>
        <button style={{margin:'5px'}} onClick={()=>setSubject('')}>Reset Sub.🪄</button>
        <College />
      </SubjectCtxt.Provider>
    </div>
  );
}

export default ParentCtxt;
