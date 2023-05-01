import ConditionalRenderingDecision from "../components/ConditionalRenderingDecision";
import ConditionalRenderingLogicalAND from "../components/ConditionalRenderingLogicalAND"
import ConditionalRenderingSingleView from "../components/ConditionalRenderingSingleView"

const ModuleC = () => {
  return (
    <>
      <h1>Module C</h1>
      <h2>Linking and Routing / Using Assets in React</h2>
      <ConditionalRenderingDecision />
      <hr />
      {/* <h3>Conditional rendering using the logical AND operator:</h3>
      <ConditionalRenderingLogicalAND/> */}
      <hr/>
      <h3>Single view conditional updates:</h3>
      <ConditionalRenderingSingleView/>
    </>
  );
};

export default ModuleC;
