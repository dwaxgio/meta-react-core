import { useState } from "react";

const ToDo = (props) => {
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input />
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>;
};

const KeyWithinList = () => {
  const [todos, setTodos] = useState([
    {
      id: "id1",
      createdAt: "18:00",
    },
    {
      id: "id2",
      createdAt: "20:30",
    },
  ]);

  const reverseOrder = () => {
    // Reverse is a mutative operation, so we need to create a new array first
    console.log("todos before:", todos);
    setTodos([...todos].reverse());

    console.log("Reverse pressed");
    // console.log("todos after:", todos.reverse());
  };

  // First example with keys, show browser console to see the warning
  return (
    <div>
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
          {todos.map((todo, index) => {
            <ToDo key={index} id={todo.id} createdAt={todo.createdAt} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default KeyWithinList;
