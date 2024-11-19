const AddFoodInput = ({ keyDownFun }) => {
  return (
    <input
      type="text"
      className=" py-2 px-4 outline-none w-full rounded-full bg-slate-800  mb-2 mt-8  "
      placeholder="Enter Food Item here"
      onKeyDown={keyDownFun}
    />
  );
};

export default AddFoodInput;
