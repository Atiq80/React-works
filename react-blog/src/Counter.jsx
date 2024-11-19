import { useState } from "react"

export const Counter = ()=>{

    const [count,setcount] = useState(0)
    const [rcount,Rsetcount] = useState(0)
    const [Qcount,Qsetcount] = useState(0)
    return (
        <>
        <div className="  items-center justify-around  font-sans  flex gap-5  bg-black m-5 text-white rounded-lg  h-16 w-[26rem]">
            <h1 className="  text-xl" >Counter : {count}</h1>
            <button  className=" py-1 select-none px-3  active:ring-1  ring-gray-300  text-black  bg-slate-400 rounded-full  text-sm  "  onClick={ ()=>setcount( count + 1) }  >Update counter</button>
        </div>
        <div className="  items-center justify-around  font-sans  flex gap-5  bg-black m-5 text-white rounded-lg  h-16 w-[26rem]">
            <h1 className="  text-xl" >Counter : {rcount}</h1>
            <button  className=" py-1 select-none px-3  active:ring-1  ring-gray-300  text-black  bg-slate-400 rounded-full  text-sm  "  onClick={ ()=>Rsetcount( rcount - 1) }  >Update counter</button>
        </div>
        <div className="  items-center justify-around  font-sans  flex gap-5  bg-black m-5 text-white rounded-lg  h-16 w-[26rem]">
            <h1 className="  text-xl" >Quantity : {Qcount}</h1>
            <div className=" flex gap-x-3">
            <button  className=" py-1 select-none px-3  active:ring-1  ring-gray-300  text-black  bg-slate-400 rounded-full  text-sm  "  onClick={ ()=>Qsetcount( Qcount + 1) }  >+</button>
            <button  className=" py-1 select-none px-3  active:ring-1  ring-gray-300  text-black  bg-slate-400 rounded-full  text-sm  "  onClick={ ()=>Qsetcount( Qcount - 1) }  >-</button>
            </div>
        </div>
        </>
    )

}

