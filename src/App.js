import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Heading";
import Expressions from "./components/Expressions";

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
    </div>
  );
}

export default App;
