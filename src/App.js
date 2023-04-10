import logo from "./logo.svg";
import "./App.css";

function Header() {
  return <h1>Header rendered from component</h1>;
}

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
