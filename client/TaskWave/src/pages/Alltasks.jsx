import React from "react";
import Cards from "../components/Cards";
import { IoMdAddCircle } from "react-icons/io";
import InputData from "../components/InputData";
import { useState } from "react";

const Alltasks = () => {
  const [isVisible, setisVisible] = useState("hidden");

  return (
    <>
      <div>
        <div className="w-full flex justify-end px-4">
          <div className="flex justify-center items-center gap-1 bg-slate-600 p-2 rounded-3xl cursor-pointer hover:bg-slate-700">
            <button onClick={() => setisVisible("fixed")}>
              {}
              <IoMdAddCircle className="text-4xl" />
            </button>
            <div className="font-semibold">Add Task</div>
          </div>
        </div>
        <Cards home="true" setisVisible={setisVisible}/>
      </div>
      <InputData isVisible={isVisible} setisVisible={setisVisible} />
    </>
  );
};

export default Alltasks;
