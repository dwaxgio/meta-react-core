// function Heading(props) {
//   const styles = {
//     background: "azure",
//     color: "tomato",
//     fontSize: "40px",
//   };

//   return <h1 style={styles}>Hello, {props.firstName}</h1>;
// }

//

//The same function, but as a Function Expression
const Heading = function (props) {
  const styles = {
    background: "azure",
    color: "tomato",
    fontSize: "40px",
  };

  return <h1 style={styles}>Hello, {props.firstName}</h1>;
};

export default Heading;
