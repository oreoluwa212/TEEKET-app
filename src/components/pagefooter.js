import React from "react";
import chat from "../assets/images/ChatDots.png";
import call from "../assets/images/PhoneCall.png";
import one from "../assets/images/1.png";
import two from "../assets/images/2.png";
import three from "../assets/images/3.png";
import four from "../assets/images/4.png";
import five from "../assets/images/5.png";
import { Link } from "react-router-dom";

function PageFooter() {
  return (
    <div className=" font-manrope mt-6 pb-10 flex flex-col  items-center justify-items-center lg:w-[100vw] lg:mt-0 justify-center lg:pb-7 lg:flex">
      <div className="  bg-[#140214] justify-center w-full lg:w-[100px] lg:pr-[2100px] lg:justify-start">
        <div class=" lg:flex-row lg:justify-items-center lg:items-center lg:gap-10 text-center pt-10 lg:pt-0 justify-center ">
          <div className=" lg:h-[500px] h-[400px] relative items-center justify-items-center justify-center">
            <div className=" flex  text-white absolute top-0 left-0 overlay ">
              <div className=" items-center justify-center justify-items-center lg:h-[500px] bg-gradient-to-bl from-[#D71A4E] to-[#0153F7] opacity-100 w-[343px] h-[400px] rounded-xl max-[420px]:w-full max-[420px]:flex-col max-[420px]:items-start max-[420px]:mx-7 lg:w-[100vw]">
                <div className=" flex flex-row ">
                  <div className=" lg:w-[100vw]">
                    <div className="  flex flex-row lg:gap-12 lg:m-[30px] gap-2 px-2 lg:p-7 lg:w-[100vw]">
                      <img className=" lg:w-[100px]" src={one} alt="" />
                      <button className=" bg-[#FF007F] text-white rounded-xl h-[48px] w-[100px] mt-4 text-[18px] lg:w-[200px] ">
                        #Secure
                      </button>
                      <img className=" lg:w-[100px]" src={two} alt="" />
                      <button className=" bg-[#B0E298] text-white rounded-xl h-[48px] w-[100px] mt-4 text-[18px] lg:w-[200px]">
                        #Connect
                      </button>
                      <div className=" hidden lg:flex flex-row lg:gap-12 gap-2">
                        <button className=" bg-[#FBBC04] text-white rounded-xl h-[48px] w-[100px] mt-4 text-[18px] lg:w-[200px]">
                          #Safe
                        </button>
                        <img className="lg:w-[150px]" src={three} alt="" />
                        <button className=" bg-[#03A4FF] text-white rounded-xl h-[48px] w-[100px] mt-4 text-[18px] lg:w-[150px]">
                          #Support
                        </button>
                        <img className="lg:w-[150px]" src={four} alt="" />
                        <img
                          className=" hidden lg:flex lg:w-[150px]"
                          src={five}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className=" flex flex-row ">
                      <div className="  flex flex-row lg:gap-12 gap-2 lg:hidden">
                        <button className=" bg-[#FBBC04] text-white rounded-xl h-[48px] w-[100px] mt-4 text-[18px]">
                          #Safe
                        </button>
                        <img className="" src={three} alt="" />
                        <button className=" bg-[#03A4FF] text-white rounded-xl h-[48px] w-[100px] mt-4 text-[18px] ">
                          #Support
                        </button>
                        <img className="lg:w-[200px]" src={four} alt="" />
                      </div>
                    </div>
                    <div className=" lg:hidden">
                      <img className="" src={five} alt="" />
                    </div>
                  </div>
                </div>
                <h1 className=" mt-5 lg:text-[24px]">Teeket For Events</h1>
                <h2 className=" lg:text-[24px]">
                  Great news! Teeket allows you connect with other attendees at
                  no cost
                </h2>
                
                  <button className=" bg-white text-blue-800 rounded-xl h-[48px] w-[167px] mt-4 text-[18px] lg:text-[19px] lg:font-bold">
                    <Link to={"/attendees"}>
                    Book an event
                    </Link>
                  </button>
                
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-col border-t border-b border-[#585858] mt-10 pb-6 lg:flex lg:flex-col lg:text-[20px]">
          <h1 className="font-semibold text-[#989898] sm:px-6 sm:my-6 max-[420px]:px-3 max-[420px]:mb-4 max-[420px]:text-[17px] max-[420px]:mt-3 lg:text-[26px]">
            MENU
          </h1>

          <div className=" w-[100vw] max-[420px]:w-full max-[420px]:flex-col max-[420px]:items-start max-[420px]:mx-7 lg:w-[100%] container flex flex-row items-center justify-center justify-items-center lg:flex">
            <div className=" flex flex-row items-center justify-center justify-items-center gap-6 max-[420px]:w-full max-[420px]:flex-col max-[420px]:items-start lg:justify-center lg:text-center">
              <h1 className="text-sm font-semibold text-[#ffffff] lg:text-[23px]">
                For Organizers
              </h1>

              <h1 className="text-sm font-medium text-[#D2D2D2] lg:text-[20px]">
                How to create an event
              </h1>
              <h1 className="text-[14px] font-medium text-[#D2D2D2] lg:text-[20px]">
                Event FAQs
              </h1>
              <h1 className="text-[14px] font-bold text-[#D2D2D2] lg:text-[20px]">
                For Attendees
              </h1>
            </div>

            <div className="flex flex-row text-[#D2D2D2] px-4 items-center justify-center justify-items-center gap-6">
              <div className="flex flex-row gap-2 max-[420px]:mt-3">
                <img className="" src={call} alt="" />
                <p className="">09134523456</p>
              </div>
              <div className="flex flex-row text-white gap-2 max-[420px]:mt-3">
                <img src={chat} alt="" />
                <p className=" text-[#D2D2D2]">Teeket@support.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-[#D2D2D2] px-1 w-full gap-6 items-center max-[420px]:w-full max-[420px]:flex-col max-[420px]:items-start max-[420px]:mx-7 lg:text-[18px]">
          <div className="flex flex-col lg:flex-row items-center text-center gap-6 max-[420px]:mt-4">
            <p>Privacy Policy</p>
            <p>Term of Use</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center text-center text-[#D2D2D2] gap-4 ">
            <p className="">&#169;Teeket Inc, All rights reserved</p>
            <p className="">Hertechtrail cohort 6 Capstone project</p>
          </div>

          <p className="flex flex-row items-center">
            Designed by{" "}
            <span className=" text-[17px] font-extrabold max-[420px]:mx-2">
              {" "}
              Team 6
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageFooter;
