const data = [
  {
    id: "1",
    title: "Title 1",
    description: "Description 1",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg?quality=90&webp=true&resize=500,454",
    price: "$1.00",
  },
  {
    id: "2",
    title: "Title 2",
    description: "Description 2",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg?quality=90&webp=true&resize=500,454",
    price: "$2.00",
  },
  {
    id: "3",
    title: "Title 3",
    description: "Description 3",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg?quality=90&webp=true&resize=500,454",
    price: "$3.00",
  },
];

const topDesserts = data.map((e) => {
  return {
    content: `${e.title} - ${e.description}`,
    price: e.price,
  };
});

const TransformingLists = () => {
  return (
    <div>
      <h3>Check the console</h3>
      {/* {console.log(topDesserts)} */}
      <p>{JSON.stringify(topDesserts)}</p>
    </div>
  );
};

export default TransformingLists;
