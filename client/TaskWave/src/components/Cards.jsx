import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

const Cards = ({ home, setisVisible }) => {
  const data = [
    {
      title: "TaskWave Backend",
      desc: "There are many issues in backend.",
      status: "In Complete",
    },
    {
      title: "TaskWave Backend",
      desc: "There are many issues in backend.",
      status: "Complete",
    },
    {
      title: "TaskWave Backend",
      desc: "There are many issues in backend.",
      status: "In Complete",
    },
    {
      title: "TaskWave Backend",
      desc: "There are many issues in backend.",
      status: "Complete",
    },
    {
      title: "TaskWave Backend",
      desc: "There are many issues in backend.",
      status: "In Complete",
    },
  ];
  return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
{data &&
        data.map((items, i) => (
          <div
            className="bg-customeOrange-100 rounded-xl p-4 hover:bg-orange-300 transition-all duration-75 cursor-pointer"
            key={i}
          >
            <div>
              <h3 className="text-2xl font-bold">{items.title}</h3>
              <p className="text-gray-50 my-2">{items.desc}</p>
            </div>
            <div className="mt-4 w-full flex items-center justify-between">
              <div className="mt-4 w-full">
                <button
                  className={`${
                    items.status === "Complete" ? "bg-blue-400" : "bg-red-500"
                  } p-2 rounded-3xl w-3/6`}
                >
                  {items.status}
                </button>
              </div>
              <div className="text-white p-2 mt-4 w-3/6 text-2xl font-semibold flex justify-around">
                <button>
                  <MdFavoriteBorder />
                </button>
                <button>
                  <FaRegEdit />
                </button>
                <button>
                  <MdOutlineDelete />
                </button>
              </div>
            </div>
          </div>
        ))}

      {home === "true" && (
        <button
          className="flex flex-col justify-center items-center bg-slate-600 rounded-xl p-4 text-gray-300 hover:scale-95 hover:bg-slate-700 transition-all duration-75 cursor-pointer"
          onClick={() => setisVisible("fixed")}
        >
          <h1 className="text-xl font-semibold">Add Task</h1>
          <IoMdAddCircle className="text-5xl" />
        </button>
      )}
    </div>
  );
};

export default Cards;
