import { useState } from "react";
import useCustomHook from "./useCustomHook";

const CustomHookImplementation = () => {
  const [count, setCount] = useState(0);
  useCustomHook(count);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <h2>Custom hook that prints on console as soon as a variable changes</h2>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Plus 1</button>
    </div>
  );
};

export default CustomHookImplementation;
