const ConditionalRenderingSingleView = () => {
  const time = new Date();
  const day = time.toLocaleDateString("en-us", { weekday: "long" });
  const morning = time.getHours() >= 6 && time.getHours() <= 19;
  let dayMessage;

  if (day.toLocaleLowerCase() == "monday") {
    dayMessage = `Happy ${day}`;
  } else if (day.toLocaleLowerCase() == "tuesday") {
    dayMessage = `${day}, for days to go`;
  } else if (day.toLocaleLowerCase() == "wednesday") {
    dayMessage = `${day}, half way there`;
  } else if (day.toLocaleLowerCase() == "thursday") {
    dayMessage = `${day}, start planning the weekend`;
  } else if (day.toLocaleLowerCase() == "friday") {
    dayMessage = `${day}, Woo - hoo, the weekend is coming!`;
  } else {
    dayMessage = `${day}, stay calm and keep having fun`;
  }

  return (
    <>
      <h3>{dayMessage}</h3>
      {morning ? <h3>Have you had breakfast yet?</h3> : ""}
    </>
  );
};

export default ConditionalRenderingSingleView;
