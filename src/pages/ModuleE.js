import TransformingLists from "../components/TransformingLists";
import TransformingListsRender from "../components/TransformingListsRender";
import TransformingListsRenderAndFilterWithSort from "../components/TransformingListsRenderAndFilterWithSort";
import KeyWithinList from "../components/KeyWithinList";
import ControlledForm from "../components/ControlledForm";
// import ContextTheme from "../components/ContextTheme";
// import { ThemeProvider } from "../components/ContextTheme";
// import ContextSwitch from "../components/ContextSwitch";
import { useTheme } from "../components/ContextTheme";

import UseStateHookManagingStateWithinComponent from "../components/UseStateHookManagingStateWithinComponent";
import UseEffectSideEffects from "../components/UseEffectSideEffects";
import FetchDataWithUseStateAndUseEffect from "../components/FetchDataWithUseStateAndUseEffect";
import FetchDataWithImageUsingUseStateAndUseEffect from "../components/FetchDataWithImageUsingUseStateAndUseEffect";
import UseReducerHook from "../components/UseReducerHook";

const ModuleE = () => {
  return (
    <>
      <h1>Module E</h1>

      <h2>Transforming lists in js</h2>
      <TransformingLists />
      <hr />
      <h2>Transforming and render lists in js</h2>
      <TransformingListsRender />
      <hr />
      <h2>Rendered list with filter and sort</h2>
      <TransformingListsRenderAndFilterWithSort />
      <hr />
      <h2>Using keys within list</h2>
      <KeyWithinList />
      <hr />
      <h2>Controlled form</h2>
      <ControlledForm />
      <hr />
      <h2>Context</h2>
      {/* <ContextTheme/> */}
      {/* <ThemeProvider /> */}
      <useTheme />
      {/* <ContextSwitch /> */}
      <hr />
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
    </>
  );
};

export default ModuleE;
