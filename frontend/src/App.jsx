import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import useGetCurrentuser from "./hooks/useGetCurrentuser";
import { useSelector } from "react-redux";
import Home from "./pages/Home";

export const serverUrl = "https://quickbite-backend-eb7b.onrender.com";

const App = () => {
  useGetCurrentuser();
  const { userData } = useSelector((state) => state.user);
  return (
    <Routes>
      <Route
        path="/"
        element={userData ? <Home /> : <Navigate to={"/signin"} />}
      />
      <Route
        path="/signup"
        element={!userData ? <SignUp /> : <Navigate to={"/"} />}
      />
      <Route
        path="/signin"
        element={!userData ? <SignIn /> : <Navigate to={"/"} />}
      />
      <Route
        path="/forgot-password"
        element={!userData ? <ForgotPassword /> : <Navigate to={"/"} />}
      />
    </Routes>
  );
};

export default App;
