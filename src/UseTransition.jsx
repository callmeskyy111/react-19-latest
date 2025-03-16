//import { useState } from "react";

import { useTransition } from "react";

//useTransition( ) can also be used without a <form/>, unlike useFormStatus( )

function UseTransition() {
  //const [pending, setPending] = useState(false);
  const [pending, startTransition] = useTransition();

  function handleSubmit() {
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted ✅");
    });
  }
  return (
    <div>
      <h3>useTransition( ) - React1️⃣9️⃣</h3>
      {pending ? <h1>LOADING... ⌛</h1> : null}
      <button disabled={pending} onClick={handleSubmit}>
        {pending ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
}

export default UseTransition;
