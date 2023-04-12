import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Heading";
import Expressions from "./components/Expressions";
import Attributes from "./components/Attributes";
import Card from "./components/Card";

const bool = false;
const str1 = "just";

function App() {
  return (
    <div className="App">
      <Heading firstName="Dwaxgio" />
      <Heading firstName="Ed" />
      <Expressions
        toggleBoolean={!bool}
        math={(10 + 20) / 3}
        str={str1 + " another " + "string"}
      />
      <Attributes />
      <div>
        <h1>Task: Add three card elements</h1>
        <Card h2="First card's h2" h3="First card's h3"/>
        <Card h2="Second card's h2" h3="Second card's h3"/>
        <Card h2="Third card's h2" h3="Third card's h3"/>
      </div>
    </div>
  );
}

export default App;
