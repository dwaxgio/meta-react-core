import ObservingStateChild from "./ObservingStateChild";
import { useState } from "react";

const ObservingStateParent = () => {
  const [word, setWord] = useState("Eat");

  const handleClick = () => {
    setWord("Drink");
  };

  return (
    <>
      <ObservingStateChild message={word + " at Little Lemon"} />
      <button onClick={handleClick}>Change action</button>
    </>
  );
};

export default ObservingStateParent;
