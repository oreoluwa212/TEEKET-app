import React from "react";
import bg from "../assets/images/CTA.png";
import chat from "../assets/images/ChatDots.png";
import call from "../assets/images/PhoneCall.png";


function PageFooter() {
  return (
    <div className=" container mx-0 max-w-screen-sm font-manrope">
      <div className=" flex justify-center">
        <div className=" w-full max-w-md mt-7">
          <div className=" w-full left-0 h-[835px] bg-[#110011]">
            <div class=" flex flex-col justify-center items-center">
              <img className=" mt-7 px-4 w-full" src={bg} alt="" />
            </div>
            <div className=" flex flex-col ">
              <h1 className=" px-6 my-6 font-semibold text-[#989898] ">MENU</h1>
              <h1 className=" px-6 text-[14px] font-semibold text-[#ffffff] ">
                For Organizers
              </h1>
              <h1 className=" px-6 py-3 text-[14px] font-medium text-[#D2D2D2] ">
                How to create an event
              </h1>
              <h1 className=" px-6 text-[14px] font-medium text-[#D2D2D2] ">
                Event FAQs
              </h1>
              <h1 className=" px-6 py-3 mb-8 text-[14px] font-bold text-[#D2D2D2] ">
                For Attendees
              </h1>
            </div>

            <div className=" mt-3 mb-9 text-[#D2D2D2] px-4 border-t border-b border-[#585858] ">
              <div className=" flex p-0 mt-4">
                <img className=" px-1" src={call} alt="" />
                <p className="p-0 p">09134523456</p>
              </div>
              <div className="mb-4 mt-3  flex flex-row text-white px-3">
                <img src={chat} alt="" />
                <p className=" text-[#D2D2D2]">Teeket@support.com</p>
              </div>
            </div>
            <div className="  ml-7 flex text-[#D2D2D2] ">
              <p>Privacy Policy</p>
              <p className=" mx-9">Term of Use</p>
            </div>
            <div className=" mt-4 ml-7 flex text-[#D2D2D2]">
              &#169;Teeket Inc, All rights reserved{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageFooter;
