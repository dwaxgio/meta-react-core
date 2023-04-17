import DataFlowGrandchild from "./DataFlowGrandchild";

const DataFlowChild = (props) => {
  const dataText = {
    // name: "Max",
    bowlShape: "Square",
    bowlStatus: "Full",
  };

  return (
    <div>
      {props.name} has{" "}
      <DataFlowGrandchild
        bowlShape={dataText.bowlShape}
        bowlStatus={dataText.bowlStatus}
      />
    </div>
  );
};

export default DataFlowChild;
