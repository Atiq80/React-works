import { useRef } from "react";
import { RiAddLine } from "react-icons/ri";

const AddTodo = ({ onNewItem }) => {
  const ItemNameElem = useRef();
  const DueDateElem = useRef();

  const handleAddBtnClick = () => {
    const todoName = ItemNameElem.current.value;
    const dueDate = DueDateElem.current.value;
    ItemNameElem.current.value = "";
    DueDateElem.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="AddTodo  flex items-center justify-center py-2  w-full ">
      <div className=" w-[97%]  bg-black   flex items-center justify-between py-2 px-3 rounded-md  ">
        <input
          type="text"
          placeholder="Type your task"
          ref={ItemNameElem}
          className=" py-1   placeholder:text-black  outline-none w-[40%] px-2 rounded-lg  text-base "
        />
        <input
          type="date"
          ref={DueDateElem}
          className=" w-[40%] text-black outline-none py-1  px-2 text-base  rounded-lg"
        />
        <button
          onClick={handleAddBtnClick}
          className="  bg-white p-2 select-none rounded-xl  active:scale-95  text-black px-3  text-base "
        >
          <RiAddLine />
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
