import TransformingLists from "../components/TransformingLists";
import TransformingListsRender from "../components/TransformingListsRender";
import TransformingListsRenderAndFilterWithSort from "../components/TransformingListsRenderAndFilterWithSort";
import KeyWithinList from "../components/KeyWithinList";

const ModuleE = () => {
  return (
    <>
      <h1>Module E</h1>

      <h2>Transforming lists in js</h2>
      <TransformingLists />
      <hr />
      <h2>Transforming and render lists in js</h2>
      <TransformingListsRender />
      <hr />
      <h2>Rendered list with filter and sort</h2>
      <TransformingListsRenderAndFilterWithSort />
      <hr />
      <h2>Using keys within list</h2>
      <KeyWithinList />
      <hr />
    </>
  );
};

export default ModuleE;
