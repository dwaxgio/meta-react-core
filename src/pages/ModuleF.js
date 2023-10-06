import UseStateHookManagingStateWithinComponent from "../components/UseStateHookManagingStateWithinComponent";
import UseEffectSideEffects from "../components/UseEffectSideEffects";
import FetchDataWithUseStateAndUseEffect from "../components/FetchDataWithUseStateAndUseEffect";
import FetchDataWithImageUsingUseStateAndUseEffect from "../components/FetchDataWithImageUsingUseStateAndUseEffect";
import UseReducerHook from "../components/UseReducerHook";
import UseRefHook from "../components/UseRefHook";
import CustomHookImplementation from "../components/CustomHookImplementation";

const ModuleF = () => {
  return (
    <>
      <h1>Module F</h1>

      
      <h2>Managing state within a component with useState</h2>
      <UseStateHookManagingStateWithinComponent />
      <hr />
      <h2>Side effects - useEffect</h2>
      <UseEffectSideEffects />
      <hr />
      <h2>Fetch data with useState and useEffect</h2>
      <FetchDataWithUseStateAndUseEffect />
      <hr />
      <h2>Fetch data with image using useState and useEffect</h2>
      <FetchDataWithImageUsingUseStateAndUseEffect />
      <hr />
      <h2>useReducer Hook</h2>
      <UseReducerHook />
      <hr />
      <h2>useRef Hook</h2>
      <UseRefHook />
      <hr />
      <h2>Custom Hook</h2>
      <CustomHookImplementation />
    </>
  );
};

export default ModuleF;
