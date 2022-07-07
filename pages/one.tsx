import React, { ChangeEvent, FormEvent, useState } from "react";

export default function FormControl() {
  // For the change event
  const [changeValue, setChangeValue] = useState<string>("initial value");

  // For the submit event
  const [submitValue, setSubmitValue] = useState<string>("");

  // When user submit form
  const submittedForm = (event: FormEvent<HTMLFormElement>) => {
    // Prevent page reloading
    event.preventDefault();
    // Collects the textarea element
    const textarea = event.currentTarget.children[0] as HTMLTextAreaElement;
    // Set the final value
    setSubmitValue(textarea.value);
  };

  //When user types within the textarea
  const changeTextarea = (event: ChangeEvent) => {
    // Collects the textarea element
    const textarea = event.currentTarget as HTMLTextAreaElement;
    // Update the textarea element value with the user inputs
    setChangeValue(textarea.value);
  };

  return (
    <div>
      <form onSubmit={submittedForm}>
        <textarea
          name="textareaName"
          value={changeValue}
          onChange={changeTextarea}
        />
        <button type="submit">Submit</button>
      </form>

      <div>{submitValue}</div>
    </div>
  );
}
