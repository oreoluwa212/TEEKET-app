import React from "react";
import logo from "../img/logo.png";
// import { Link } from "react-router-dom";

function nav() {
  return (
    <div className=" container mx-auto max-w-screen-sm my-9 flex flex-row justify-center">
      <div className=" w-[90%] min-[400px]:w-[60%] lg:w-[30%] border-gray-300">
        <div className=" flex-1 mx-0 ">
          <img src={logo} alt="logo" className=" w-30 h-12" />
        </div>
      </div>
      <div className=" float-none">
        <button className=" ml-13 bg-[#001133] py-[13px] text-white font-bold text-[14px] text-center rounded-[12px] w-[79px]">
          Menu
        </button>
      </div>
    </div>
  );
}

export default nav;
