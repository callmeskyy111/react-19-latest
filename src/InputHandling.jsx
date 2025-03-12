import React, { useState } from "react";
// Handling checkboxes

function InputHandling() {
  const [skills, setSkills] = useState([]);
  const [gender, setGender] = useState("Male");
  const [city, setCity] = useState("Kolkata");

  function onHandleChange(evt) {
    const skill = evt.target.value;
    console.log(`Skills: ${skills}, checked: ${evt.target.checked}`);
    if (evt.target.checked) {
      setSkills([...skills, skill]);
    } else {
      setSkills([...skills.filter((s) => s !== skill)]);
    }
  }

  return (
    <div>
      {/* CHECKBOXES */}
      <h3>Select your SKILLS✅</h3>
      <input
        type="checkbox"
        id="nextjs"
        value="NextJs15"
        onChange={onHandleChange}
      />
      <label htmlFor="nextjs">NextJs</label>
      <br />
      <input
        type="checkbox"
        id="react"
        value="React19"
        onChange={onHandleChange}
      />
      <label htmlFor="react">React</label>
      <br />
      <input
        type="checkbox"
        id="vuejs"
        value="VueJs"
        onChange={onHandleChange}
      />
      <label htmlFor="vuejs">Vue.js</label>
      <br />
      <input
        type="checkbox"
        id="nodejs"
        value="NodeJs"
        onChange={onHandleChange}
      />
      <label htmlFor="nodejs">Node.js</label>
      <br />
      <input
        type="checkbox"
        id="mongodb"
        value="MongoDB"
        onChange={onHandleChange}
      />
      <label htmlFor="mongodb">MongoDB</label>
      <br />
      <hr />
      {/* RADIO-BTNs */}
      <h3>Select GENDER 🔘</h3>
      <input
        type="radio"
        checked={gender === "Male"}
        value="Male"
        name="gender"
        id="male"
        onChange={(evt) => setGender(evt.target.value)}
      />
      <label htmlFor="male">Male💪🏻🔥</label>
      <br />
      <input
        type="radio"
        checked={gender === "Female"}
        value="Female"
        name="gender"
        id="female"
        onChange={(evt) => setGender(evt.target.value)}
      />
      <label htmlFor="female"> Female♀️🍽️</label>
      <br />
      <input
        type="radio"
        checked={gender === "Other"}
        value="Other"
        name="gender"
        id="other"
        onChange={(evt) => setGender(evt.target.value)}
      />
      <label htmlFor="other"> Other🏳️‍🌈💅🏻</label>
      <hr />
      <br />
      {/* DROPDOWNS */}
      <h3>Select CITY📍</h3>

      <select
        defaultValue={"Kolkata"}
        onChange={(evt) => setCity(evt.target.value)}>
        <option value="Kolkata">Kolkata</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Delhi">Delhi</option>
        <option value="Chennai">Chennai</option>

        <option value="Pune">Pune</option>
      </select>
      <hr />
      <br />
      <h2>Skills: {skills.join(", ")}</h2>
      <h2>Gender : {gender}</h2>
      <h2>City: {city}</h2>
    </div>
  );
}

export default InputHandling;
