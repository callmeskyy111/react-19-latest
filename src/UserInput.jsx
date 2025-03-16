import React from "react";
//forwardRef( )
function UserInput(props) {
  return <div>
    <h3>UserInput</h3>
    <input type="text" placeholder="Enter your name" ref={props.ref}/>
  </div>;
}

export default UserInput;
