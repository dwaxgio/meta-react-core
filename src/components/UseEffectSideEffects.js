import { useState } from "react";
import { useEffect } from "react";

const UseEffectSideEffects = () => {
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    document.title = toggle
      ? `Welcome to Little Lemon ${toggle}`
      : `Using the useEffect hook ${toggle}`;
  }, [toggle]);

  return (
    <div>
      <h2>Using the useEffect hook</h2>
      <button onClick={clickHandler}>Toggle message</button>
      {toggle && <h2>Welcome to Little Lemon</h2>}
    </div>
  );
};

export default UseEffectSideEffects;
