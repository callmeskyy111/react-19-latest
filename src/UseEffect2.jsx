import React, { useEffect } from "react";

function UseEffect2({ count, randData }) {
  function handleCounter() {
    console.log(`handleCounter() called ☑️`);
  }

  function handleData() {
    console.log(`handleData() called ✅`);
  }

  useEffect(()=>{
    console.log("useEffect() called only once 1️⃣✔️");
    return () => console.log("UseEffect cleanup() called 🗑️🧹"); // Cleanup on unmount
  },[])

  useEffect(() => {
    handleCounter();
  }, [count]); // ✅ Dependency array with 'count' ensures this runs whenever 'count' changes

  useEffect(() => {
    handleData();
  }, [randData]); // ✅ Dependency array with 'randData' ensures this runs whenever 'randData' changes

  return (
    <div>
      <h1>UseEffect with 'props' 🔄️</h1>
      <h2>Count: {count}➕</h2>
      <h2>Data: {randData}➕</h2>
    </div>
  );
}

export default UseEffect2;
