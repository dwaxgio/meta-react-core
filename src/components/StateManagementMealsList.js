import { useStateManagementMealsListContext } from "../providers/StateManagementMealsProvider";

const StateManagementMealsList = () => {
  const { meals } = useStateManagementMealsListContext();

  return (
    <div>
      <h1>Meals List using Context API</h1>
      {meals.map((meal, index) => (
        <h2 key={index}>{meal}</h2>
      ))}
    </div>
  );
};

export default StateManagementMealsList;
