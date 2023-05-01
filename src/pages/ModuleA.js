import Heading from "../components/Heading";
import Expressions from "../components/Expressions";
import Attributes from "../components/Attributes";
import Card from "../components/Card";

const bool = false;
const str1 = "just";

const ModuleA = () => {
  return (
    <>
      <h1>Module A</h1>
      <h2>React Components and Where They Live / Component Use and Styling</h2>
      <br/>
      <Heading firstName="Dwaxgio" />
        <Heading firstName="Ed" />
        <hr />
        <Expressions
          toggleBoolean={!bool}
          math={(10 + 20) / 3}
          str={str1 + " another " + "string"}
        />
        <hr />
        <Attributes />
        <hr />
        <div>
          <h1>Task: Add three card elements</h1>
          <Card h2="First card's h2" h3="First card's h3" />
          <Card h2="Second card's h2" h3="Second card's h3" />
          <Card h2="Third card's h2" h3="Third card's h3" />
        </div>
    </>
  );
};

export default ModuleA;
