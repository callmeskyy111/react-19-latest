import React from "react";
import { useFormStatus } from "react-dom";

function UseFormStatus() {
  async function handleSubmit() {
    await new Promise((res) => setTimeout(res, 1500)); //mocking async-api call
    console.log(`Form Submitted ✅`);
  }

  function CustomForm() {
    const { pending } = useFormStatus();
    console.log(`Pending: ${pending}`)
    return (
      <div>
        <h3>Custom Form 📃</h3>
        <input type="text" placeholder="Enter your name" />
        <br />
        <br />
        <input type="password" placeholder="Enter your password" />
        <br />
        <br />
        <button disabled={pending} type="submit">{pending ? 'Submitting...':'Submit'}</button>
      </div>
    );
  }

  return (
    <div>
      <h2>UseFormStatus Hook in ReactJs 19</h2>
      <form action={handleSubmit}>
        <CustomForm />
      </form>
    </div>
  );
}

export default UseFormStatus;
