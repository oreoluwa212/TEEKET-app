import React from "react";
import placeholder from "../assets/images/hero section.png";
import users from "../assets/images/user.png";
import ticket from "../assets/images/ticket.png";
import Analytics from "../assets/images/Analytics.png";
import marketing from "../assets/images/marketing.png";
import phone from "../assets/images/phone.png";
import review from "../assets/images/Review.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className=" lg:pt-10 lg:w-[1000px] max-[420px]:w-[60%] container font-manrope">
      <div className=" flex justify-center">
        <div className=" w-full max-w-md lg:w-screen  lg:text-center">
          <div className=" lg:justify-center lg:items-center w-[410px] lg:w-[80vw] lg:mt-[50px] flex flex-col ">
            <Link to={"/attendees"}>
              <img
                src={placeholder}
                alt="background"
                className=" lg:mt-[50px] w-[420px] lg:w-[45vw] lg:h-[500px]"
              />
            </Link>
            <h1 className=" lg:text-[35px] font-extrabold text-center text-[26px] mt-9">
              {" "}
              Empowering event creators everywhere{" "}
            </h1>
            <h2 className=" mt-4 pl-2 text-[16px] mb-4 text-center  justify-center w-[390px] lg:w-[80vw] lg:text-[21px] font-extrabold">
              More than 1 million people across 5 continents choose Teeket
            </h2>
          </div>

          <div className=" flex flex-row mx-auto lg:flex lg:flex-row lg:w-[60vw] lg:mx-auto">
            <div className=" flex w-[800px] lg:mx-auto lg:justify-center ">
              <img
                src={users}
                className=" mx-[80px] h-[180px]  lg:w-[40vw] lg:mx-auto lg:ml-[450px]"
                alt="users"
              />
            </div>
          </div>

          <div className=" bg-[#D0DBF1] lg:text-center lg:w-[80vw] w-[440px] bg-opacity-[40%] h-[980px] lg:h-[1850px] lg:mb-10 mt-14 mb-7 rounded-2xl ">
            <div className="  justify-center items-center px-3">
              <h1 className=" pt-3 mb-4 text-[26px] font-manrope text-[#0052F6] font-extrabold">
                Teeket Features
              </h1>
              <div className=" lg:text-[23px] flex px-3">
                <span className="text-[#2068F7]  pr-2 font-extralight text-opacity-[70%]">
                  01
                </span>
                <h1 className=" text-[#2068F7] font-extrabold">
                  Do more with the Teeket App
                </h1>
              </div>
              <div
                className=" lg:w-full
                w-[380px] text-[14px] pl-3 font-semibold "
              >
                <h1 className=" lg:text-[24px] lg:w-60vw">
                  Create events and sell tickets with our seamless and secure
                  checkout feature for attendees in your event.
                </h1>
                <img className=" my-6 lg:w-[60%] " src={ticket} alt="ticket" />
              </div>
              <hr className=" border-t-10 mb-6 lg:w-[70vw] " />
              <div className=" lg:text-[23px] flex px-3">
                <span className="text-[#2068F7]  pr-2 font-extralight text-opacity-[70%]">
                  02
                </span>
                <h1 className=" text-[#2068F7] font-extrabold">
                  ANALYTICS AND FEEDBACK
                </h1>
              </div>
              <div className=" lg:w-full w-[380px] text-[14px] pl-3 font-semibold ">
                <h1 className=" lg:text-[24px] lg:w-60vw">
                  Use real-time analytics and reports to learn more about your
                  buyers and what your attendes are saying about your event.
                </h1>
                <img className=" my-6" src={Analytics} alt="ticket" />
              </div>
              <hr className=" border-t-10 mb-6 lg:w-[70vw] " />
              <div className=" lg:text-[23px] flex px-3">
                <span className="text-[#2068F7]  pr-2 font-extralight text-opacity-[70%]">
                  03
                </span>
                <h1 className=" text-[#2068F7] font-extrabold">
                  MARKETING AND PROMOTION
                </h1>
              </div>
              <div className=" lg:w-full w-[380px] text-[14px] pl-3 font-semibold ">
                <h1 className=" lg:text-[24px] lg:w-60vw">
                  Boost event visibility and ticket sales when you market and
                  promote your event with our tools and partners.
                </h1>
                <img
                  className=" my-6 flex flex-row lg:justify-center lg:text-center"
                  src={marketing}
                  alt="ticket"
                />
              </div>
              <hr className=" border-t-10 mb-6 lg:w-[80vw] lg:mb-6" />
            </div>
          </div>
          <div className=" text-center lg:text-center lg:justify-center lg:mb-6 lg:flex lg:flex-col lg:justify-items-center lg:w-[70vw]  w-[380px] text-[14px] pl-3 font-semibold ">
            <div className=" text-center lg:text-center lg:justify-center">
              <h1 className=" lg:mb-4 lg:text-[30px] font-extrabold text-center text-[22px] mt-7">
                Do more with the Teeket App
              </h1>
              <h1 className=" lg:mb-10 lg:text-[25px] lg:w-[60vw] mx-2 text-[16px] lg:pt-0 pt-4">
                Organize events like a Pro with our easy to use{" "}
                <span className="text-[#2068F7]  pr-2 font-extralight text-opacity-[70%]">
                  Teeket app
                </span>{" "}
                featuring tools like check in, curating guestlists, marketing
                tools and much more
              </h1>
            </div>
            <div className=" flex flex-row lg:justify-center lg:text-center">
              <img
                alt="phone"
                className=" h-[314px] lg:w-[50%] lg:h-[600px]"
                src={phone}
              />
            </div>
            <div className=" flex flex-col ">
              <h1 className="lg:mt-8 lg:text-[24px] text-[#2068F7] font-extrabold text-[18px] my-2 text-center">
                That's not all!
              </h1>
              <h1 className=" mx-2 text-center text-[16px] p-2 lg:text-[24px]">
                Get 30 days free access to promotion by our partners to attract
                more attendees and boost ticket sales for your events.
              </h1>
              <h1 className=" lg:justify-center lg:text-center lg:text-[28px] font-extrabold text-[22px] mx-4 mt-7">
                Don't take our word for it
              </h1>
              <img
                alt=""
                className=" lg:w-[800px] lg:justify-center lg:text-center"
                src={review}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
