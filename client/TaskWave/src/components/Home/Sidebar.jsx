import React, { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = ({isVisible, setisVisible}) => {
  const data = [
    {
      title: "All Tasks",
      icon: <FaTasks />,
      link: "/",
    },

    {
      title: "Important Tasks",
      icon: <MdOutlineNotificationImportant />,
      link: "/Important",
    },

    {
      title: "Completed Tasks",
      icon: <FaCheckCircle />,
      link: "/Completed",
    },

    {
      title: "Pending Tasks",
      icon: <MdOutlinePendingActions />,
      link: "/Pending",
    },
  ];

  const [activeLink, setActiveLink] = useState("/");
  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <div className={`flex justify-around`}>
        <div>
          <h2 className="text-xl font-extrabold">TaskWave</h2>
        </div>
      
        <hr />
      </div>
      <div>
        {data.map((items, i) => (
          <Link
            key={i}
            to={items.link}
            className={`mt-2 bg-customBlue-800 font-semibold flex items-center gap-2 cursor-pointer p-2 rounded-xl transition-all duration-75 ${
              activeLink === items.link
                ? "bg-blue-100 text-gray-900"
                : "hover:bg-slate-400 text-white"
            }`}
            onClick={() => handleSetActive(items.link)}
          >
            {items.icon}
            {items.title}
          </Link>
        ))}
      </div>
      <Link
        to="/login"
        className="bg-slate-600 text-white w-full p-2 rounded-3xl mt-4 text-center font-bold cursor-pointer hover:bg-blue-100 hover:text-black transition-all duration-75 block"
      >
        Log Out
      </Link>
    </div>
  );
};

export default Sidebar;
