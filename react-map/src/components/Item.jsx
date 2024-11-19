const Item = ({ Item, handleBuyBtn }) => {
  return (
    <li
      key={Item}
      className="py-3 border-b border-opacity-15 border-white text-lg px-2"
    >
      {Item}
      <button
        className="float-right select-none rounded-full active:scale-95 px-4 bg-green-600"
        onClick={() => handleBuyBtn(Item)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
