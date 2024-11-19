import { MdOutlineDone } from "react-icons/md";
import { RiDeleteBin7Line } from "react-icons/ri";

const TodoItem = ({ Item, onDeleteBtn }) => {
  return (
    <div className=" todoitem  flex py-2 px-2  items-center justify-between  mx-2  h-fit   bg-lime-300">
      <p className="taskName text-base">{Item.name}</p>
      <p className="taskdate text-base">{Item.dueDate}</p>
      <div className=" gap-x-2 flex ">
        <button
          onClick={() => onDeleteBtn(Item.name)}
          className="  bg-white select-none  p-2 rounded-xl  active:scale-95 px-3  text-base "
        >
          <RiDeleteBin7Line />
        </button>
        <button
          className="  bg-white select-none p-2 rounded-xl  active:scale-95  text-black px-3  text-base "
          onClick={() => onDeleteBtn(Item.name)}
        >
          <MdOutlineDone />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
