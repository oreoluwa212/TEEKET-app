// import Button from "../components/Button";
import placeholder from "../assets/images/Placeholder.png";
import members from "../assets/images/members.png";
import { Link } from 'react-router-dom';
import Button from "../components/Button";
import { Trends } from "../data";
import attendeeFooter from "../img/footerAttendee.png";

function AttendesPage() {
  return (
    <>
      <div className=" container mx-auto min-w-[310px]-sm  font-manrope">
        <div className=" flex justify-center">
          <div className=" w-full max-w-sm">
            <div className="  flex flex-col justify-center items-center">
              <img
                src={placeholder}
                alt="Attendees' placeholder"
                className=" w-full  "
              />
            </div>

            <div className=" mr-3 ">
              <h2 className=" font-extrabold text-[33px]">
                Book Your Events With{" "}
                <span className=" text-blue-700">Teeket</span>
              </h2>
              <h3 className=" text-[#1F2229] Eventstext-opacity-[80%] mx-5 font-semibold  text-left mt-3 ">
                Your One Stop Platform To Create, Manage And Promote Your At
                Your Convenience
              </h3>
            </div>

            <div className=" flex py-3">
              <img
                className=" w-[144px] h-[37px] object-cover"
                src={members}
                alt=""
              />
              <h4 className=" font-semibold mx-3 my-1.5"> + 2,000 members</h4>
            </div>

            <div className=" mt-12 text-[24px] h-[32px] font-manrope">
              <h1 className=" font-extrabold">Trending Events</h1>
            </div>
            <div className=" mt-14 w-full font-manrope">
              {Trends.map((trend) => {
                return (
                  <div
                    key={trend.id}
                    className=" flex gap-4 px-4 w-[full] justify-between mb-8 items-center"
                  >
                    <div className=" flex flex-col gap-4 w-2/3">
                      <div className=" flex justify-start items-center gap-10">
                        {" "}
                        <p>{trend.date}</p>
                        <p className=" bg-[#FF0909] bg-opacity-[13%] w-[59px] h-[24px] rounded-lg text-[#FF0909] font-bold text-[12px] flex justify-center items-center">
                          {trend.cost}
                        </p>
                      </div>
                      <div className=" mb-1">
                        <p className=" font-extrabold text-[25px] text-lg">
                          {trend.title}
                        </p>
                        <div className=" flex justify-start items-center gap-4 w-full mt-4">
                          <div className=" w-[24px] h-[24px] rounded-full">
                            <img
                              className=" w-full h-full object-cover"
                              src={trend.authorImage}
                              alt=""
                            />
                          </div>
                          <p className=" ">{trend.covener}</p>
                        </div>
                        <div className=" flex justify-start items-center gap-4 w-full mt-4">
                          <div className=" w-[24px] h-[24px] rounded-full">
                            <img
                              className=" w-full h-full object-cover"
                              src={trend.location1}
                              alt=""
                            />
                          </div>
                          <p className="">{trend.location}</p>
                        </div>
                      </div>
                    </div>
                    <div className=" w-[122px] h-[140px] rounded-xl">
                      <img
                        className=" w-full h-full object-cover"
                        src={require("../img/" + trend.img + ".png")}
                        alt={trend.title}
                      />
                    </div>
                  </div>
                );
              })}

              <Link to="/login">
                <Button title={"Discover more"} />
              </Link>

              <div className=" flex flex-col justify-between">
                <h2 className="  ml-7 font-extrabold text-center w-[350px] text-[20px] h-[50px]">
                  More Than 1000+ Leading Event Companies Choose teeket
                </h2>

                <img
                  className=" py-4"
                  src={attendeeFooter}
                  alt="attendee footer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AttendesPage;
