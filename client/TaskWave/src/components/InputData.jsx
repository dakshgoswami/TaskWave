import React from "react";
import { ImCross } from "react-icons/im";

const InputData = ({isVisible, setisVisible}) => {
  return (
    <>
      <div className={`${isVisible} top-0 left-0 bg-gray-800 opacity-50 h-screen w-full`}></div>

      <div className={`${isVisible} top-0 left-0 rounded flex items-center justify-center h-screen w-full`}>
        <div className="w-2/6 bg-blue-300 p-4 rounded-2xl flex flex-col items-end">
        <button onClick={()=>setisVisible('hidden')}>
      <ImCross className="text-xl mb-2 cursor-pointer hover:scale-90 transition-all duration-75"/>
        </button>
          <input
            type="text"
            placeholder="Title"
            name="title"
            autoComplete="off"
            className="px-3 py-2 rounded-xl w-full font-semibold text-black border-none outline-none"
          />

          <textarea
            cols="30"
            rows="10"
            type="text"
            placeholder="Description"
            autoComplete="off"
            name="desc"
            className="px-3 py-2 rounded-xl w-full mt-2 font-semibold text-black border-none outline-none"
          />

<div className="bg-blue-400 m-auto text-white w-1/2 p-2 rounded-3xl mt-4 text-center font-bold cursor-pointer hover:bg-slate-600 transition-all duration-75">
        Submit
      </div>
        </div>
      </div>
    </>
  );
};

export default InputData;
