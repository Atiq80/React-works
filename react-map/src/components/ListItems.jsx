import Item from "./Item";

const ListItems = ({ ItemArr, handleBuyFun }) => {
  // Function to handle the "buy" action

  return (
    <>
      <ul className="my-2  max-h-[30rem]  overflow-x-hidden overflow-y-scroll  ">
        {ItemArr.map((item) => (
          <Item key={item} Item={item} handleBuyBtn={handleBuyFun} />
        ))}
      </ul>
    </>
  );
};

export default ListItems;
