import ConditionalRenderingWorkdays from "./ConditionalRenderingWorkdays";
import ConditionalRenderingWeekends from "./ConditionalRenderingWeekends";

const ConditionalRenderingDecision = () => {
  const day = new Date().getDay();

  if (day >= 1 && day <= 5) {
    return (
      <>
        <h3>Applying conditional rendering:</h3>
        <ConditionalRenderingWorkdays />
      </>
    );
  }
  return (
    <>
      <h3>Applying conditional rendering:</h3>
      <ConditionalRenderingWeekends />
    </>
  );
};

export default ConditionalRenderingDecision;
