import React from "react";
import bg from "../assets/images/CTA.png";

function PageFooter() {
  return (
    <div className=" container mx-auto p-4 max-w-screen-sm font-manrope">
      <div className=" flex justify-center">
        <div className=" w-full max-w-md pr-6">
          <div className=" w-[375px] left-0 h-[835px] bg-[#110011]">
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
              <h1 className=" px-6 py-3 text-[14px] font-bold text-[#D2D2D2] ">
                For Attendees
              </h1>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageFooter;
