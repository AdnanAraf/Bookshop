import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex justify-between bg-lime-50 p-[40px]">
        <h1 className="text-[40px] mx-[80px] font-bold">BookShop</h1>
        <div className="flex gap-[70px] cursor-pointer text-[18px] font-semibold my-[10px]">
          <Link className="list-none " to="/home">
            Home
          </Link>
          <Link className="list-none" to="/bookshop">
            BookShop
          </Link>
          <li className="list-none" href="#">
            Order
          </li>
          <li className="list-none" href="#">
            About Me
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
