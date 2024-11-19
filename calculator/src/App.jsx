import { useState } from "react";
import BtnCon from "./components/BtnCon";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    console.log(buttonText);
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className=" w-full main   font-sans  flex items-center justify-center   bg-[#EFE8DE] h-screen  ">
      <div className=" h-[25rem] w-full  max-w-72    p-4 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100 flex flex-col ">
        <Display displayVal={calVal} />
        <BtnCon onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}

export default App;
