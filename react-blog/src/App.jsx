import { Profile } from "./profile";
import Feilds from "./Feilds";
import { Counter } from "./Counter";
import { useState } from "react";

// toggle 

function App() {
  const [display,setDisplay] = useState(false);
  return (

    <>

    <div className=" font-mono Profile-card flex py-5 px-3 gap-x-3  bg-slate-300 w-fit rounded-lg m-5">
      <div className=" border-r-2 px-2 border-black border-opacity-40 border-solid">
        <Profile />
      </div>
      <div className="details flex gap-y-2   pr-6  items-start  flex-col ">
        <h1 className=" text-xl " >SirMeowsALot</h1>
        <ul className="   list-inside  list-disc  text-sm " >
          <li>Fluffy and Cute</li>
          <li>Master of Naps</li>
          <li>Purrs with Style</li>
        </ul>
        <button className=" bg-green-400 px-2  rounded-md " onClick={Reply}>Say Hello!</button>
      </div>
    </div>
     
      <button  className=" px-3  m-5   text-md py-1 rounded-full bg-black text-white  active:ring ring-gray-300 " onClick={()=>setDisplay(!display)} >Toggle</button>

     {
         display? < Counter /> :null  
     }

    <Feilds />
    </>
    
  )
}

function Reply() {
  alert("Meow! 😺 I'm here to say hello! 🐾")
}








export default App;