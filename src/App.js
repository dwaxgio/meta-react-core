import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Heading";
import Expressions from "./components/Expressions";
import Attributes from "./components/Attributes";
import Card from "./components/Card";

// WEEK 2
import EventHandling from "./components/EventHandling";
import ModeToggler from "./components/ModeToggler";
import DynamicEvent from "./components/DynamicEvent";
import DataFlowParent from "./components/DataFlowParent";
import Hook from "./components/Hook";
import HookForm from "./components/HookForm";
import ObservingStateParent from "./components/ObservingStateParent";
import StateManagementMealsProvider from "./providers/StateManagementMealsProvider";
import StateManagementMealsList from "./components/StateManagementMealsList";
import StateManagementMealsCounter from "./components/StateManagementMealsCounter";

const bool = false;
const str1 = "just";

function App() {
  return (
    <div className="App">
      <div>
        <h1>WEEK 1</h1>
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
      </div>
      <br />
      <hr />
      <hr />
      <div>
        <h1>WEEK 2</h1>
        <EventHandling />
        <hr />
        <ModeToggler />
        <hr />
        <DynamicEvent />
        <hr />
        <DataFlowParent />
        <hr />
        <Hook />
        <hr />
        <HookForm />
        <hr />
        <ObservingStateParent />
        <hr />
        <StateManagementMealsProvider>
          <StateManagementMealsList />
          <StateManagementMealsCounter />
        </StateManagementMealsProvider>
      </div>
    </div>
  );
}

export default App;
