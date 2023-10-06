import TransformingLists from "../components/TransformingLists";
import TransformingListsRender from "../components/TransformingListsRender";
import TransformingListsRenderAndFilterWithSort from "../components/TransformingListsRenderAndFilterWithSort";
import KeyWithinList from "../components/KeyWithinList";
import ControlledForm from "../components/ControlledForm";
// import ContextTheme from "../components/ContextTheme";
// import { ThemeProvider } from "../components/ContextTheme";
// import ContextSwitch from "../components/ContextSwitch";
import { useTheme } from "../components/ContextTheme";

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
    </>
  );
};

export default ModuleE;
