import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

function nav() {
  return (
    <div className=" overflow-hidden lg:overflow-hidden w-screen lg:w-screen  lg:mx-auto  lg:flex lg:flex-row container mx-auto py-4 flex justify-center justify-items-center items-center">
      <nav className="  max-[420px]:w-full w-full lg:z-auto z-[-1] lg:left-0 lg:absolute lg:pt-[50px] lg:mt-8 lg:px-[100px]  lg:text-center px-4 flex flex-row justify-between items-center gap-6 lg:w-full">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="  w-30 h-12 lg:h-[4vw] lg:px-5 lg:w-100"
          />
        </Link>

        <ul className="max-[420px]:text-[25px] max-[420px]:hidden max-[420px]:bg-blue-500 max-[420px]:text-white max-[420px]:z-[100] max-[420px]:transition-all max-[420px]:mt-[72px] max-[420px]:w-[100%] max-[420px]:text-center  lg:flex lg:flex-row lg:gap-16">
          <li className=" hover:text-[33px] lg:font-bold lg:text-blue-600 lg:mx-[30px] lg:w-15 lg:text-[30px]">
            <Link to={"/home"}>Home</Link>
          </li>
          <li className=" hover:text-[33px] lg:font-bold lg:text-blue-600 lg:mx-[30px] lg:w-15 lg:text-[30px]">
            <Link to={"/eventLists"}>Events</Link>
          </li>
          <li className=" hover:text-[33px] lg:font-bold lg:text-blue-600 lg:mx-[30px] lg:w-15 lg:text-[30px]">
            <Link to={"/attendees"}>Trends</Link>
          </li>
        </ul>

        <button className="flex lg:hidden items-center justify-center bg-[#001133] text-white font-bold text-base text-center rounded-[12px] w-20 h-10 cursor-pointer">
          Menu
        </button>
      </nav>
    </div>
  );
}

export default nav;
