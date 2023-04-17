const EventHandling = () => {
  const clickHandler = () => console.log("Clicked!");
  const mouseOverHandler = () => console.log("Over me!");

  return (
    <div>
      <button onClick={clickHandler}>Click me</button>
      <button onMouseOver={mouseOverHandler}>Mouse over me</button>
    </div>
  );
};

export default EventHandling;
