import React from "react";
import logo from "../img/logo2.svg";
import { Link } from "react-router-dom";
import frame from "../img/Frame.png";

function LandingPage() {
  return (
    <div className=" mx-auto w-[100%] min-[420px]:w-[60%] lg:w-[100%] bg-background m-0 p-0 h-screen font-manrope ">
      <div className=" justify-center items-center px-3 flex flex-col w-full h-full backdrop-brightness-10 bg-[#000D26] bg-opacity-[85%]">
        <div className="text-center">
          <Link to="/">
            {" "}
            <img src={logo} alt="logo" className="mx-auto lg:w-[300px]" />
          </Link>
        </div>
        <main>
          <div className=" mt-10">
            <img src={frame} alt="frame" className=" mx-auto lg:w-[600px]" />
          </div>
          <p className="text-center mt-10 text-white text-[20px] lg:text-[30px]">
            Your one stop platform to create , manage and promote your events at
            your convenience.
          </p>
          <div className=" w-full flex justify-center items-center mt-12">
            <Link
              className="bg-[#0052F6]	text-white rounded-xl h-[60px] w-[85%] font-bold py-4 text-center lg:rounded-[30px] lg:justify-center lg:text-center lg:pt-6 lg:text-[23px] lg:w-[50%] lg:h-[80px]"
              to={"/login"}
            >
              <button className=""> Create an event</button>
            </Link>
          </div>
          <div className=" w-full flex justify-center items-center mt-8">
            <Link
              className=" lg:rounded-[30px] lg:justify-center lg:text-center lg:pt-6 lg:text-[23px] lg:w-[50%] lg:h-[80px] bg-white text-[#101010] rounded-xl h-[60px] w-[85%] font-bold py-4 text-center"
              to={"/eventLists"}
            >
              <button> Discover event</button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

export default LandingPage;
