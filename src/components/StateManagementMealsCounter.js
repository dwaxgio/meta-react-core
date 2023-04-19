import { useStateManagementMealsListContext } from "../providers/StateManagementMealsProvider";

const StateManagementMealsCounter = () => {
  const { meals } = useStateManagementMealsListContext();

  return (
    <div>
      <h3>Number of meals today: {meals.length}</h3>
    </div>
  );
};

export default StateManagementMealsCounter;
