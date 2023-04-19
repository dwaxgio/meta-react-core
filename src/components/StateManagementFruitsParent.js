import React from "react";
import StateManagementFruits from "./StateManagementFruits";
import StateManagementFruitsCounter from "./StateManagementFruitsCounter";

const StateManagementFruitsParent = () => {
  const [fruits] = React.useState([
    { fruitName: "apple", id: 1 },
    { fruitName: "apple", id: 2 },
    { fruitName: "plum", id: 3 },
  ]);

  return (
    <div>
      <h1>Where should the state go?</h1>
      <StateManagementFruits fruits={fruits} />
      <StateManagementFruitsCounter fruits={fruits} />
    </div>
  );
};

export default StateManagementFruitsParent;
