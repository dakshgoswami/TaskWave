import React, { useEffect } from "react";
import Home from "./pages/Home";
import Alltasks from "./pages/Alltasks";
import Important from "./pages/Important";
import Completed from "./pages/Completed";
import Incompleted from "./pages/Incompleted";
import { Routes, Route, useNavigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";
const App = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("id") && localStorage.getItem("token")) {
      dispatch(authActions.login());
    } else if (isLoggedIn === false) {
      navigate("/signup");
    }
  }, [dispatch, isLoggedIn, navigate]);
  const [isVisible, setisVisible] = useState("w-1/6");
  return (
    <div className="bg-zinc-800 h-screen text-white p-2 relative">
      <Routes>
        <Route
          exact
          path="/"
          element={<Home isVisible={isVisible} setisVisible={setisVisible} />}
        >
          <Route index element={<Alltasks />} />
          <Route path="/Important" element={<Important />} />
          <Route path="/Completed" element={<Completed />} />
          <Route path="/Incompleted" element={<Incompleted />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
