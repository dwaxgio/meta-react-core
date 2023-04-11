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

  return <h1 style={styles}>Hello there, {props.firstName}, {props.firstName == "Dwaxgio" ? "Dwaxgio is here" : ""}</h1>;
};

export default Heading;
