import { useRef } from "react";

const UseRefHook = () => {
  const formInputRef = useRef(null);

  const focusInput = () => {
    formInputRef.current.focus();
  };

  return (
    <div>
      <h2>Using useRef to access underlying DOM</h2>
      <input ref={formInputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default UseRefHook;
