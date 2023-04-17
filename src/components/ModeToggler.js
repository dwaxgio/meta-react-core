const ModeToggler = () => {
  let darkModeOn = true;
  const darkMode = <h1>Dark Mode is On</h1>;
  const lightMode = <h1>Light Mode is On</h1>;

  const modeText = "";
  const modeTextFunction = () => {
    if (darkModeOn) {
      modeText = <h1>Dark Mode is On</h1>;
    } else {
      <h1>Light Mode is On</h1>;
    }
  };

  const handleClick = () => {
    darkModeOn = !darkModeOn;

    if (darkModeOn) {
      console.log("Dark Mode is On");
    //   modeText = <h1>Dark Mode is On</h1>;
    } else {
      console.log("Light Mode is On");
    //   modeText = <h1>Light Mode is On</h1>;
    }
  };

  return (
    <div>
      {darkModeOn ? darkMode : lightMode};
      {/* <button
        onClick={() => {
          handleClick;
          modeTextFunction;
        }}
      >
        Click me for dark or light mode
      </button>
       */}
       {/* {modeText} */}
      <button onClick={handleClick}>Click me for dark or light mode</button>
    </div>
  );
};

export default ModeToggler;
