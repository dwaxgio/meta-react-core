function Heading(props) {
  const styles = {
    color: "tomato",
    fontSize: "40px"
  }

  return <h1 style={styles}>Hello, {props.firstName}</h1>;
}

export default Heading;
