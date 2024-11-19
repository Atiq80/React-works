import { useState } from "react";
import ErrorMessage from "./components/ErrorMessage";
import ListItems from "./components/ListItems";
import AddFoodInput from "./components/addFoodInput";

function App() {
  // let foodItems = ["Dal", "Roti", "Milk", "Green Vegetable", "Salad", "Egg"];
  let [foodItems, setFoodItems] = useState([]);

  const handleBuyFun = (item) => {
    console.log(`${item} wants buying`);
  };
  const keyDownFun = (event) => {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      let getItem = event.target.value;
      event.target.value = "";
      let newItem = [...foodItems, getItem];
      setFoodItems(newItem);
    } else if (event.key === "Enter") {
      console.log("Value can't be empty");
    }
  };

  return (
    <>
      <div className="  h-screen flex items-center font-mono justify-center   w-full  text-gray-200 bg-slate-900">
        <div className="  w-full max-w-xl ">
          <h1 className=" text-5xl font-bold  text-center uppercase">
            Healthy Food
          </h1>
          <AddFoodInput keyDownFun={keyDownFun} />
          <ErrorMessage ItemArr={foodItems} />
          <ListItems ItemArr={foodItems} handleBuyFun={handleBuyFun} />
        </div>
      </div>
    </>
  );
}

export default App;
