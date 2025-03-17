import React, { useState } from "react";

function ObjectState() {
  const [name, setName] = useState("Soumadip 👨🏻‍💻");
  const [details, setDetails] = useState({
    fullName: "Soumadip Banerjee",
    age: 29,
    location: {
      city: "Kolkata",
      country: "India",
    },
    skills: ["React", "JavaScript", "Node.js"],
  });

  console.log(details);

  return (
    <div>
      <h2>Updating ObjectsP{`{ }`} in state[ ].</h2>
      <h3>Name: {name}</h3>
      <button onClick={() => setName("Skyy 🧛🏻‍♂️")}>Update Name</button>
      <input
        type="text"
        placeholder="update name"
        onChange={(evt) =>
          setDetails({ ...details, fullName: evt.target.value })
        }
      />
      <h3>fullName: {details.fullName}</h3>
      <h3>City: {details.location.city}</h3>
      <h3>Country: {details.location.country}</h3>
      <h3>Primary Skill: {details.skills[0]}</h3>
    </div>
  );
}

export default ObjectState;
