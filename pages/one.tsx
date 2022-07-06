import React, { ChangeEvent, FormEvent, useState } from "react";

export default function One() {
  // for the change event
  const [changeValue, setChangeValue] = useState<string>("initial");
  // for the submit event
  const [submittedValue, setSubmittedValue] = useState<string>("");

  // when user submit form
  const submittedForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // collects the textarea element
    const textarea = event.currentTarget.children[0] as HTMLTextAreaElement;

    setSubmittedValue(textarea.value);
  };

  // when user types within the textarea
  const changedTextarea = (event: ChangeEvent) => {
    const textarea = event.currentTarget as HTMLTextAreaElement;

    // collects the textarea element
    setChangeValue(textarea.value);
  };

  return (
    <div>
      <form onSubmit={submittedForm}>
        <textarea
          name="textareaName"
          value={changeValue}
          onChange={changedTextarea}
        />

        <button type="submit">Submit</button>
      </form>

      <div>{submittedValue}</div>
    </div>
  );
}
