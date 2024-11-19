const Display = ({ displayVal }) => {
  return (
    <input
      type="text"
      className=" py-2 rounded-md text-lg px-2 outline-none "
      readOnly
      value={displayVal}
    />
  );
};

export default Display;
