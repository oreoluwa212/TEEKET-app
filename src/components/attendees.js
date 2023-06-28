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
      <div className=" w-screen lg:mt-[50px] lg:pt-2 lg:flex lg:flex-col min-[548px]:w-[60%] lg:w-[80vw]  font-manrope">
        <div className=" w-full px-6 lg:p-0 flex justify-center">
          <div className=" w-full lg:w-full max-w-md lg:text-center">
            <div className=" lg:w-[50vw] lg:pt-9 flex flex-col justify-center items-center">
              <img
                src={placeholder}
                alt="Attendees' placeholder"
                className=" lg:pt-7 lg:relative lg:w-[1200px] lg:h-[500px] "
              />
            </div>

            <div className=" mr-3 lg:m-0 lg:w-[50vw] lg:flex lg:flex-col">
              <h2 className=" lg:pt-10 lg:w-[50vw] font-extrabold text-[33px] lg:text-center lg:justify-center lg:text-[40px]">
                Book Your Events With{" "}
                <span className=" text-blue-700">Teeket</span>
              </h2>
              <h3 className=" lg:w-[90vw] lg:text-[25px] text-[#1F2229] text-opacity-[80%] font-semibold flex text-left text-[20px] pb-5 mt-3 ">
                Your One Stop Platform To Create, Manage And Promote Your At
                Your Convenience
              </h3>
            </div>

            <div className=" lg:flex lg:flex-col">
              <div className=" lg:mx-[300px] lg:pt-4 flex mx-6 pt-1 lg:w-[700px] lg:flex lg:flex-row ">
                <img
                  className="   w-[144px] h-[37px] object-cover lg:w-[300px] lg:h-[50px]"
                  src={members}
                  alt=""
                />
                <h4 className=" font-semibold mx-3 mt-2 text-[17px] lg:mt-0 lg:pt-1 lg:mx-1 lg:text-[30px] lg:p-0 ">
                  {" "}
                  + 2,000 members
                </h4>
              </div>

              <div className=" lg:w-[50vw">
                <div className=" lg:w-[60vw] lg:text-[30px] lg:mt-18 mt-12 text-[24px] h-[32px] font-manrope">
                  <h1 className=" text-[28px] lg:text-[34px] font-extrabold  ">
                    Trending Events
                  </h1>
                </div>
              </div>
              <div className=" mt-14 w-full font-manrope lg:w-[60vw]">
                {Trends.map((trend) => {
                  return (
                    <div
                      key={trend.id}
                      className=" flex gap-4 px-4 w-[full] justify-between mb-8 items-center"
                    >
                      <div className=" flex flex-col gap-4 w-2/3">
                        <div className=" lg:text-[25px] flex justify-start items-center gap-10">
                          {" "}
                          <p>{trend.date}</p>
                          <p className=" lg:text-[20px] lg:w-[80px] bg-[#FF0909] bg-opacity-[13%] w-[59px] h-[24px] rounded-lg text-[#FF0909] font-bold text-[12px] flex justify-center items-center">
                            {trend.cost}
                          </p>
                        </div>
                        <div className=" mb-1">
                          <p className=" font-extrabold lg:text-[24px] text-[26px] text-lg">
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
                            <p className=" lg:text-[23px]">{trend.covener}</p>
                          </div>
                          <div className=" flex justify-start items-center gap-4 w-full mt-4">
                            <div className=" w-[24px] h-[24px] rounded-full">
                              <img
                                className="  w-full h-full object-cover"
                                src={trend.location1}
                                alt=""
                              />
                            </div>
                            <p className=" lg:text-[19px]">{trend.location}</p>
                          </div>
                        </div>
                      </div>
                      <div className=" w-[122px] h-[140px] rounded-xl">
                        <img
                          className=" rounded-2xl w-full h-full object-cover"
                          src={require("../img/" + trend.img + ".png")}
                          alt={trend.title}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className=" lg:flex lg:flex-row">
                <div className=" lg:flex lg:flex-col lg:w-[20vw]">
                  <div className=" lg:px-7">
                    <Link to="/login">
                      <Button title={"Discover more"} />
                    </Link>
                  </div>

                  <div className=" lg:w-[40vw] flex flex-col justify-between">
                    <h2 className=" lg:w-[40vw] lg:text-[25px] ml-7 font-extrabold text-center w-[350px] text-[18px] h-[50px]">
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
        </div>
      </div>
    </>
  );
}

export default AttendesPage;
