import ComponentCompositionWithChild from "../components/ComponentCompositionWithChild";
import ManipulateChildrenDynamically from "../components/ManipulateChildrenDynamically";
import SpreadAttributes from "../components/SpreadAttributes";
import HiguerOrderComponentHOC from "../components/HiguerOrderComponentHOC";

const ModuleG = () => {
  return (
    <>
      <h1>Module G</h1>

      <h2>Component composition with child</h2>
      <ComponentCompositionWithChild />
      <hr />
      <h2>Manipulate children dynamically</h2>
      <ManipulateChildrenDynamically />
      <hr />
      <h2>Spread attributes</h2>
      <SpreadAttributes />
      <hr />
      <h2>HiguerOrderComponent (HOC)</h2>
      <HiguerOrderComponentHOC />
      <hr />
    </>
  );
};

export default ModuleG;
