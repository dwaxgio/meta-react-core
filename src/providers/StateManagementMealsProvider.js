import React from "react";

const MealsContext = React.createContext();

const todaysMeals = ["Baked Beans", "Baked Sweet Potatoes", "Baked Potatoes"];

const StateManagementMealsProvider = ({ children }) => {
  const [meals, setMealsList] = React.useState(todaysMeals);

  return (
    <MealsContext.Provider value={{ meals }}>{children}</MealsContext.Provider>
  );
};

export const useStateManagementMealsListContext = () =>
  React.useContext(MealsContext);

export default StateManagementMealsProvider;
