import React from "react";
import logo from "../img/logo2.svg";
import { Link } from "react-router-dom";
import frame from "../img/Frame.png";

function LandingPage() {
  return (
    <div className=" bg-background m-0 h-screen font-manrope ">
      <div className=" justify-center items-center px-3 flex flex-col w-full h-full backdrop-brightness-10 bg-[#000D26] bg-opacity-40">
        <div className="text-center">
          <Link to="/sample">
            {" "}
            <img src={logo} alt="logo" className="mx-auto " />
          </Link>
        </div>
        <main>
          <div className=" mt-10">
            <img src={frame} alt="frame" className=" mx-auto" />
          </div>
          <p className="text-center mt-10 text-white text-[20px]">
            Your one stop platform to create , manage and promote your events at
            your convenience.
          </p>
          <div className=" w-full flex justify-center items-center mt-12">
            <Link
              className="bg-[#0052F6]	text-white rounded-xl h-[60px] w-[85%] font-bold py-4 text-center "
              to={"/login"}
            >
              <button className=""> Create an event</button>
            </Link>
          </div>
          <div className=" w-full flex justify-center items-center mt-8">
            <Link
              className="bg-white text-[#101010] rounded-xl h-[60px] w-[85%] font-bold py-4 text-center"
              to={"/login"}
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
