import React from "react";
import placeholder from "../assets/images/hero section.png"; 
import users from "../assets/images/user.png";
import ticket from "../assets/images/ticket.png";
import Analytics from "../assets/images/Analytics.png";
import marketing from '../assets/images/marketing.png';
import phone from '../assets/images/phone.png';
import review from '../assets/images/Review.png';

function Home() {
  return (
    <div className=" container mx-auto p-4 max-w-screen-sm font-manrope">
      <div className=" flex justify-center">
        <div className=" w-full max-w-md">
          <div className=" flex flex-col justify-center items-center">
            <img src={placeholder} alt="background" />
            <h1 className="  font-extrabold text-center text-[25px] mt-7">
              {" "}
              Empowering event creators everywhere{" "}
            </h1>
            <h2 className=" mt-3 pl-2 my-2 text-center w-[390px] font-extrabold">
              More than 1 million people across 5 continents choose Teeket
            </h2>
          </div>

          <div>
            <img src={users} className=" w-[100vw] " alt="users" />
          </div>
          <div className=" bg-[#D0DBF1] bg-opacity-[40%] h-[1055px] my-10 rounded-2xl">
            <div>
              <h1 className=" mb-6 text-[18px] font-manrope text-[#0052F6] font-extrabold">
                Teeket Features
              </h1>
              <div className=" flex px-3">
                <span className="text-[#2068F7]  pr-2 font-extralight text-opacity-[70%]">
                  01
                </span>
                <h1 className=" text-[#2068F7] font-extrabold">
                  Do more with the Teeket App
                </h1>
              </div>
              <div className="  w-[380px] text-[14px] pl-3 font-semibold ">
                <h1 className="">
                  Create events and sell tickets with our seamless and secure
                  checkout feature for attendees in your event.
                </h1>
                <img className=" my-6" src={ticket} alt="ticket" />
              </div>
              <hr className=" border-t-10 mb-6" />
              <div className=" flex px-3">
                <span className="text-[#2068F7]  pr-2 font-extralight text-opacity-[70%]">
                  02
                </span>
                <h1 className=" text-[#2068F7] font-extrabold">
                  ANALYTICS AND FEEDBACK
                </h1>
              </div>
              <div className="  w-[380px] text-[14px] pl-3 font-semibold ">
                <h1 className="">
                  Use real-time analytics and reports to learn more about your
                  buyers and what your attendes are saying about your event.
                </h1>
                <img className=" my-6" src={Analytics} alt="ticket" />
              </div>
              <hr className=" border-t-10 mb-6" />
              <div className=" flex px-3">
                <span className="text-[#2068F7]  pr-2 font-extralight text-opacity-[70%]">
                  03
                </span>
                <h1 className=" text-[#2068F7] font-extrabold">
                  MARKETING AND PROMOTION
                </h1>
              </div>
              <div className="  w-[380px] text-[14px] pl-3 font-semibold ">
                <h1 className="">
                  Boost event visibility and ticket sales when you market and
                  promote your event with our tools and partners.
                </h1>
                <img className=" my-6" src={marketing} alt="ticket" />
              </div>
              <hr className=" border-t-10 mb-6" />
            </div>
          </div>
          <div className="  w-[380px] text-[14px] pl-3 font-semibold ">
            <h1 className="  font-extrabold text-center text-[22px] mt-7">
              Do more with the Teeket App
            </h1>
            <h1 className=" mx-2 text-center text-[16px] p-4">
              Organize events like a Pro with our easy to use{" "}
              <span className="text-[#2068F7]  pr-2 font-extralight text-opacity-[70%]">
                Teeket app
              </span>{" "}
              featuring tools like check in, curating guestlists, marketing
              tools and much more
            </h1>
            <img alt="phone" className=" my-3 h-[314px]" src={phone} />
            <h1 className=" text-[#2068F7] font-extrabold text-[18px] my-2 text-center">
              That's not all!
            </h1>
            <h1 className=" mx-2 text-center text-[16px] p-2">
              Get 30 days free access to promotion by our partners to attract
              more attendees and boost ticket sales for your events.
            </h1>
            <h1 className="  font-extrabold text-[22px] mt-7">
              Don't take our word for it
            </h1>
            <img alt="" className=" " src = { review }/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
