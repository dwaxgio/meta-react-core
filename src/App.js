import logo from "./logo.svg";
import "./App.css";

// // WEEK 1
// import Heading from "./components/Heading";
// import Expressions from "./components/Expressions";
// import Attributes from "./components/Attributes";
// import Card from "./components/Card";

// // WEEK 2
// import EventHandling from "./components/EventHandling";
// import ModeToggler from "./components/ModeToggler";
// import DynamicEvent from "./components/DynamicEvent";
// import DataFlowParent from "./components/DataFlowParent";
// import Hook from "./components/Hook";
// import HookForm from "./components/HookForm";
// import ObservingStateParent from "./components/ObservingStateParent";
// import StateManagementMealsProvider from "./providers/StateManagementMealsProvider";
// import StateManagementMealsList from "./components/StateManagementMealsList";
// import StateManagementMealsCounter from "./components/StateManagementMealsCounter";
// import HookReducer from "./components/HookReducer";
// import StateManagementFruitsParent from "./components/StateManagementFruitsParent";

// WEEK 3
import { Routes, Route, Link } from "react-router-dom";

import Homepage from "./pages/Homepage";
import AboutMe from "./pages/AboutMe";
import ModuleA from "./pages/ModuleA";
import ModuleB from "./pages/ModuleB";
import ModuleC from "./pages/ModuleC";
import ModuleD from "./pages/ModuleD";

// REACT ADVANCED
import ModuleE from "./pages/ModuleE";

// const bool = false;
// const str1 = "just";

function App() {
  return (
    <div className="App">
      {/* <div>
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
        <hr />
        <HookReducer />
        <hr />
        <StateManagementFruitsParent />
      </div>
      <div>
        <h1>WEEK 3</h1>
      </div> */}

      <nav className="nav">
        {/* <Link to="/" className="nav-item">
          Homepage
        </Link>
        <Link to="/about-me" className="nav-item">
          About Me
        </Link> */}

        <Link to="/modulea" className="nav-item">
          Module A
        </Link>
        <Link to="/moduleb" className="nav-item">
          Module B
        </Link>
        <Link to="/modulec" className="nav-item">
          Module C
        </Link>
        <Link to="/moduled" className="nav-item">
          Module D
        </Link>
        {/* React advanced */}
        <Link to="/moduleE" className="nav-item">
          Module E
        </Link>
      </nav>
      <Routes>
        {/* <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} /> */}

        <Route path="/modulea" element={<ModuleA />} />
        <Route path="/moduleb" element={<ModuleB />} />
        <Route path="/modulec" element={<ModuleC />} />
        <Route path="/moduled" element={<ModuleD />} />
        {/* React advance */}
        <Route path="/modulee" element={<ModuleE />} />
      </Routes>
    </div>
  );
}

export default App;
