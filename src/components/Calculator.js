import { useState, useRef } from "react";
const Calculator = () => {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  const times = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  const divide = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult((prevVal) => prevVal * 0);
  };

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <h2 ref={resultRef}>{result}</h2>
        <input
          id="calculatorinput"
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button id="calculatorbutton" onClick={plus}>
          add
        </button>
        <button id="calculatorbutton" onClick={minus}>
          subtract
        </button>
        <button id="calculatorbutton" onClick={times}>
          multiply
        </button>
        <button id="calculatorbutton" onClick={divide}>
          divide
        </button>
        <button id="calculatorbutton" onClick={resetInput}>
          reset input
        </button>
        <button id="calculatorbutton" onClick={resetResult}>
          reset result
        </button>
      </form>
    </div>
  );
};

export default Calculator;
