import { useState } from "react";

const Hook = () => {
  // inputText = object that takes the value from the input, takes the default value of 'hello'
  // setText = object to set the value from the DOM element
  // usteState = hook method initialized at the beginning of the component with the default value of 'hello'
  const [inputText, setText] = useState("hello");

  function handleChange(e) {
    // Reads the latest input value from the browsers input DOM element, and calls the setText function to update the local state of inputText
    setText(e.target.value);
  }

  return (
    <>
      <input value={inputText} onChange={handleChange} />
      <p>You typed: {inputText}</p>
      <button onClick={() => setText("hello")}>Reset</button>
    </>
  );
};

export default Hook;
