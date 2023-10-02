import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "buy_ingredients") return { money: state.money - 10 };
  if (action.type === "sell_meal") return { money: state.money + 10 };
  if (action.type === "celebrity_visit") return { money: state.money + 5000 };
  return state;
};

const UseReducerHook = () => {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Wallet: {state.money}</h2>
      <div>
        <button onClick={() => dispatch({ type: "buy_ingredients" })}>
          Shopping for veggies!
        </button>
        <button onClick={() => dispatch({ type: "sell_meal" })}>
          Serve a meal to the customer
        </button>
        <button onClick={() => dispatch({ type: "celebrity_visit" })}>
          Celebrity visit
        </button>
      </div>
    </div>
  );
};

export default UseReducerHook;
