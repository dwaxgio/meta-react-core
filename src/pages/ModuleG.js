import ComponentCompositionWithChild from "../components/ComponentCompositionWithChild";
import ManipulateChildrenDynamically from "../components/ManipulateChildrenDynamically";

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
    </>
  );
};

export default ModuleG;
