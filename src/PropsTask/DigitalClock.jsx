import React, { useEffect, useState } from "react";

function DigitalClock({ clockClr }) {
  // Digital clock in React with 'color' coming in as 'prop'
  const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const currTimeInterval = setInterval(() => {
      setCurrTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(currTimeInterval); // Cleanup on unmount
  }, []); // ✅ Empty dependency array ensures this runs only once

  return (
    <div>
      <h3>Digital Clock ⌚</h3>
      <h1 style={{ color: clockClr }}>{currTime}</h1>
    </div>
  );
}

export default DigitalClock;
