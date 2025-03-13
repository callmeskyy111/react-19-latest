import React, { useState } from "react";
import DigitalClock from "./DigitalClock";

function ClockContainer() {
  const [clockClr, setClockClr] = useState("yellow");
  return (
    <div
      style={{
        backgroundColor: "black",
        padding: "1.5em",
        borderRadius: "10px",
      }}>
      <select
        style={{ padding: "5px", borderRadius: "10px" }}
        defaultValue={clockClr}
        onChange={(evt) => setClockClr(evt.target.value)}>
        <option value="yellow">Yellow 🌻</option>
        <option value="blue">Blue 🌊</option>
        <option value="red">Red 🍒</option>
        <option value="green">Green 🌿</option>
        <option value="orange">Orange 🍊</option>
        <option value="purple">Purple 🌃</option>
        <option value="white">White ☁️</option>
        <option value="lime">Lime 🍋‍🟩</option>
      </select>
      <DigitalClock clockClr={clockClr} />
    </div>
  );
}

export default ClockContainer;
