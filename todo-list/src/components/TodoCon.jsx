import TodoItem from "./Todoitem";
import WelcomeMsg from "./WelcomeMsg";

const TodoCon = ({ todoItems, onDeleteBtn }) => {
  return (
    <div className=" h-[83.5%]  bg-gray-500  overflow-y-scroll overflow-x-hidden  mx-2 gap-2 py-2   flex-col  rounded-md flex ">
      <WelcomeMsg todoItems={todoItems} />

      {todoItems.map((item) => (
        <TodoItem onDeleteBtn={onDeleteBtn} key={item.name} Item={item} />
      ))}
    </div>
  );
};

export default TodoCon;
