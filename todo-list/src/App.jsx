import { useState, useReducer } from "react";
import AddTodo from "./components/AddTodo";
import TodoCon from "./components/TodoCon";

// main functionalities
const TodoItemReducer = (currItems, action) => {
  let newTodoItems = [...currItems]; // Make a copy of the current items

  if (action.type === "NEW_ITEM") {
    if (action.payload.itemName && action.payload.itemDueDate) {
      newTodoItems = [
        ...currItems,
        { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
      ];
    }
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }

  return newTodoItems;
};

function App() {
  const [todoItems, dispatchTodoItems] = useReducer(TodoItemReducer, []);

  const handleNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const handleDeleteButton = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction); // Make sure to dispatch the delete action
  };

  return (
    <div className="main w-full font-poppins font-thin h-screen flex items-center justify-center bg-indigo-950 ">
      <div className="toduList h-[28rem] rounded-lg shadow-[rgba(255,255,255,0.2)] shadow-2xl max-w-3xl overflow-hidden w-full bg-[#E0E7FF] ">
        <AddTodo onNewItem={handleNewItem} />
        <TodoCon onDeleteBtn={handleDeleteButton} todoItems={todoItems} />
      </div>
    </div>
  );
}

export default App;
