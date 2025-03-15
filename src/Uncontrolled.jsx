import React from "react";

function Uncontrolled() {
  function handleSubmit(evt) {
    evt.preventDefault();
    const name = evt.target.name.value;
    const password = evt.target.password.value;
    console.log(`Name: ${name}, Password: ${password}`);
    evt.target.reset(); // clear the form inputs after submission
  }
  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <h2>Stateless and doesn't have state</h2>
      <form method="post" onSubmit={handleSubmit}>
        <input
          style={{ height: "25px", width: "200px", margin:'5px' }}
          type="text"
          name="name"
          placeholder="Enter your name"
          id="name"
        />
        <br />
        <br />
        <input
          style={{ height: "25px", width: "200px", margin:'5px' }}
          type="password"
          name="password"
          placeholder="Enter your password"
          id="password"
        />
        <div>
            <button type="submit">Submit</button>
        </div>
        
      </form>
    </div>
  );
}

export default Uncontrolled;
