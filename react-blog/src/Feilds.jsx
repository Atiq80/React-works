import { useState } from "react";

function Feilds() {
      const [ val , setVal] = useState('')      
    return(
        <>
  <h1 class="text-4xl font-bold text-center text-blue-600 mb-6">Get Input Field Value</h1>

<div class="p-6 m-5 max-w-lg mx-auto">
  <input
    type="text"
    placeholder="Enter Values"
    value={val}
    onChange={(event) => setVal(event.target.value)}
    class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-medium"
  />
  <p class="mt-4 text-xl text-gray-700 font-serif">{val}</p>

  <button
    onClick={() => setVal('')} 
    className="mt-4 w-full py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
  >
    Clear
  </button>
</div>


        </>
    )

 }


 export default Feilds;