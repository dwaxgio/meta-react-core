// Custom hook that prints on console varName when it changes

import { useEffect } from "react";

const useCustomHook = (varName) => {
  useEffect(() => {
    console.log(varName);
  }, [varName]);
};

export default useCustomHook;
