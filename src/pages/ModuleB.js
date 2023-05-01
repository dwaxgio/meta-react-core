import EventHandling from "../components/EventHandling";
import ModeToggler from "../components/ModeToggler";
import DynamicEvent from "../components/DynamicEvent";
import DataFlowParent from "../components/DataFlowParent";
import Hook from "../components/Hook";
import HookForm from "../components/HookForm";
import ObservingStateParent from "../components/ObservingStateParent";
import StateManagementMealsProvider from "../providers/StateManagementMealsProvider";
import StateManagementMealsList from "../components/StateManagementMealsList";
import StateManagementMealsCounter from "../components/StateManagementMealsCounter";
import HookReducer from "../components/HookReducer";
import StateManagementFruitsParent from "../components/StateManagementFruitsParent";

const ModuleB = () => {
  return (
    <>
      <h1>Module B</h1>
      <h2>Dynamic events and how to handle tem / Data and Events</h2>
      <br/>
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
    </>
  );
};

export default ModuleB;
