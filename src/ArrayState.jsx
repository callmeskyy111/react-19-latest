import React, { useState } from "react";

function ArrayState() {
  const [name, setName] = useState("Soumadip 👨🏻‍💻"); // Primitive vals.
  const [hobbies, setHobbies] = useState([
    "Reading 📚",
    "Coding 💻",
    "Movies 🎥",
  ]); //Arr.

  const [hobbyDetails, setHobbyDetails] = useState([
    { name: "Reading", time: "Night 🌃" },
    { name: "Coding", time: "Morning 🌄" },
    { name: "Movies", time: "Evening 🌆" },
  ]);

  function updateLastHobby(hobby) {
    hobbies[hobbies.length - 1] = hobby;
    setHobbies([...hobbies]);
    console.log("Hobbies: ", hobbies);
  }

  function updateLastHobbyName(name) {
    hobbyDetails[hobbyDetails.length - 1].name = name;
    setHobbyDetails([...hobbyDetails]);
    console.log("Hobby Details: ", hobbyDetails);
  }

  return (
    <div>
      <h2>Updating Arrays[ ] is state.</h2>
      <h3>Name: {name}</h3>
      <button onClick={() => setName("Skyy 🧛🏻‍♂️")}>Update Name</button>
      <hr />
      <br />
      <br />
      <input
        type="text"
        placeholder="Edit last-hobby"
        onChange={(evt) => updateLastHobby(evt.target.value)}
      />
      <div>
        <h3>Hobbies Arr.[ ]:</h3>
        {hobbies.map((hobby, index) => (
          <p key={index}>
            {index + 1}. {hobby}
          </p>
        ))}
      </div>
      <hr />
      <br />
      <br />
      <div>
        <input
          type="text"
          placeholder="Edit last-hobby name"
          onChange={(evt) => updateLastHobbyName(evt.target.value)}
        />
        <h3>Hobby Details Arr.[ ]</h3>
        {hobbyDetails.map((hobby, index) => (
          <div key={index}>
            <h4>{hobby.name}</h4>
            <p>Time: {hobby.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArrayState;
