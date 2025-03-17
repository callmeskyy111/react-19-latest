import React from 'react'
import ClassComp from './ClassComp';

function College() {
  return (
    <div
      style={{
        backgroundColor: "orange",
        padding: 10,
        color: "brown",
        borderRadius: "5px",
      }}>
      <h2>College Component</h2>
      <ClassComp/>
    </div>
  );
}

export default College