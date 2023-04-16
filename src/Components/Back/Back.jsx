import React from "react";
import Cover from "../Cover/Cover";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Back = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Back;
