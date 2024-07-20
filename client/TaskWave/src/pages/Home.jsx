import React from "react";
import Sidebar from "../components/Home/Sidebar";
import "../index.css"; // Ensure Tailwind CSS is imported
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Home = ({ isVisible, setisVisible }) => {
  const [isWidth, setisWidth] = useState("w-full");
  return (
    <div className="flex flex-row h-[98vh] gap-4">
      <div
        className={`${isVisible} sm:w-1/12 md:w-1/4 lg:w-1/4 xl:w-1/6 border bg-customBlue-900 text-white rounded-xl border-gray-600 flex relative justify-end md:p-6 p-4`}
      >
        <Sidebar />
      </div>

      <div
        className={`${isWidth} sm:w-full md:w-full lg:w-full xl:w-full border bg-customBlue-900 text-white rounded-xl border-gray-600 p-4`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
