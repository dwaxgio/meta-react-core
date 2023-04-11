// function Heading(props) {
//   const styles = {
//     background: "azure",
//     color: "tomato",
//     fontSize: "40px",
//   };

//   return <h1 style={styles}>Hello, {props.firstName}</h1>;
// }

//

// //The same function, but as a Function Expression
// const Heading = function (props) {
//   const styles = {
//     background: "azure",
//     color: "tomato",
//     fontSize: "40px",
//   };

//   return <h1 style={styles}>Hello, {props.firstName}</h1>;
// };

//The same function, but as an Arrow Function
const Heading = (props) => {
  const styles = {
    background: "azure",
    color: "tomato",
    fontSize: "40px",
  };

  const randomNumber = () => Math.floor(Math.random() * 10) + 1;

  return (
    <div>
      <h1 style={styles}>
        Hello there, {props.firstName},{" "}
        {props.firstName == "Dwaxgio" ? "Dwaxgio is here" : ""}
      </h1>
      <h2>
        Here is a random number from 0 to 10 using funcion call in jsx:{" "}
        {randomNumber()}
      </h2>
    </div>
  );
};

export default Heading;
