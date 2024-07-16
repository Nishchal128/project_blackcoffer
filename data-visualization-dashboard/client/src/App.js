import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Dashboard/Main";
import Login from "./components/Login/Login";
import PreLoader from "./components/pre-loader/pre-loader";

const AppRouter = () => {
  return (
    <>
      <PreLoader />
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Main />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
