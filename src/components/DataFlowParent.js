import DataFlowChild from "./DataFlowChild";

const DataFlowParent = () => {
  const dataText = {
    name: "Max",
    bowlShape: "Square",
    bowlStatus: "Full",
  };

  return (
    <DataFlowChild
      name={dataText.name}
      bowlShape={dataText.bowlShape}
      bowlStatus={dataText.bowlStatus}
    />
  );
};

export default DataFlowParent;
