import { useState } from "react";
import { useRef } from "react";

const HookForm = () => {
  // useState hook: useState hook could be used to hold the string.
  const [form, setForm] = useState({
    firstName: "Luke",
    lastName: "Jones",
    email: "lukeJones@MediaList.com",
  });

  // useRe hook: use it to access a child element directly
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };

  return (
    <>
      <div>
        <h2>useState hook</h2>
        <label>
          First name:
          <input
            value={form.firstName}
            onChange={(e) => {
              setForm({
                //... break down / is destructuring (JSX spread attributes) the values of the form object, one by one
                // the ... Spread notation is handy not only for that use case, but for creating a new object with most (or all) of the properties of an existing object
                ...form,
                // That replaces setForm with a new object with all the same properties as ''firstName'' except the a property, which becomes "e.target.value"
                firstName: e.target.value,
              });
            }}
          />
        </label>
        <label>
          Last name:
          <input
            value={form.lastName}
            onChange={(e) => {
              setForm({
                ...form,
                lastName: e.target.value,
              });
            }}
          />
        </label>
        <label>
          Email:
          <input
            value={form.email}
            onChange={(e) => {
              setForm({
                ...form,
                email: e.target.value,
              });
            }}
          />
        </label>
        <p>
          {form.firstName} {form.lastName} {form.email}{" "}
        </p>
      </div>
      <div>
        <h2>useRef hook</h2>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </div>
    </>
  );
};

export default HookForm;
