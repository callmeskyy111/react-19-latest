import React, { useContext } from 'react'
import { SubjectCtxt } from './context';

function SubjectComp() {
    const subject = useContext(SubjectCtxt)
  return (
    <div
      style={{
        backgroundColor: "gray",
        padding: 10,
        color: "brown",
        borderRadius: "5px",
      }}>
      <h2>Subject Component</h2>
      <p>Subject:{subject}</p>
    </div>
  );
}

export default SubjectComp