import React, { useId } from "react";
// Don't use for keys{ } in a list.

function UseId() {
  return (
    <div>
      <h2>useId( ) hook 🪝</h2>
      <div>
        <hr />
        <h3>Usage..</h3>
        <UseIdForm />
        <UseIdForm />
      </div>
    </div>
  );
}

function UseIdForm() {
  //   const name = useId();
  //   const password = useId();
  const user = useId();
  console.log(user);
  return (
    <form>
      <label htmlFor={`${user}name`}>UserName: </label>
      <input
        type="text"
        id={`${user}name`}
        name="name"
        placeholder="Enter name.."
      />

      <label htmlFor={`${user}password`}>Password: </label>
      <input
        type="password"
        id={`${user}password`}
        name="password"
        placeholder="Enter password.."
      />
      <br />
      <hr />
      <br />
    </form>
  );
}

export default UseId;
