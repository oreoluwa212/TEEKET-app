import React from "react";
import musicImg from "../img/music_note.png";
import { useState } from "react";
import search from "../img/search_icon.png";
import searchBar from "../img/Search bar.png";
import { events, sports } from "../data";
import Button1 from "../components/Button1";
import { Link } from "react-router-dom";

function TabLists() {
  const [searchval, setSearchVal] = useState("");

  const [searchresults, setSearchResults] = useState(events, sports);

  const filterEvents = (e) => {
    setSearchVal(e.target.value);
    if (searchval === "") {
      console.log("empty");
      setSearchResults(events, sports);
    }
    let filteredData = searchresults.filter((event) =>
      event.title.toLowerCase().includes(searchval.toLowerCase())
    );
    let filteredData1 = searchresults.filter((sport) =>
      sport.title.toLowerCase().includes(searchval.toLowerCase())
    );
    setSearchResults(filteredData, filteredData1);
  };

  const clearSearchBar = () => {
    setSearchVal("");
    setSearchResults(events, sports);
  };
  return (
    <div className=" mx-auto w-[90%] min-[548px]:w-[60%] lg:w-[100vw] container p-4 lg:p-0 max-w-screen-sm font-manrope lg:mt-[50px]">
      <div className=" flex justify-center lg:justify-start lg:flex lg:flex-col lg:w-full">
        <div className=" lg:w- max-w-sm justify-center lg:justify-start">
          <div className=" lg:flex lg:flex-col lg:mt-10">
            <p className=" lg:mt-16 font-manrope mt-16 text-[22px] lg:text-[32px]  font-medium">
              Discover events near you
            </p>
            <div className=" mt-5 flex lg:flex lg:flex-row lg:mt-6">
              <div className=" lg:mt-8 lg:w-[50vw]  flex bg-[#F5F5F5] rounded-2xl w-90 lg:h-[80px]">
                <img
                  src={search}
                  alt="search"
                  className=" lg:w-[50px] lg:m-5 h-8 mt-4 mb-4 ml-4 pl-2 "
                />
                <input
                  type="text"
                  placeholder="Search all events"
                  className=" lg:px-4 lg:w-[700px] lg:text-[23px] outline-none  rounded-2xl border-none text-[20px] font-medium bg-[#F5F5F5]"
                  value={searchval}
                  onChange={filterEvents}
                />
              </div>
              <div className="">
                <img
                  src={searchBar}
                  alt="search"
                  onClick={clearSearchBar}
                  className=" mr-3 lg:px-4 lg:mt-9 lg:w-[80px] lg:mx-6"
                />
              </div>
            </div>
          </div>

          <div className=" lg:w-[50vw] lg:grid-cols-2 lg:gap-8 lg:mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 mt-9">
            <div className=" lg:w-[300px] lg:h-[150px] lg:flex lg:flex-row w-[164px] h-[84px] bg-[#FBBF0A] rounded-2xl p-4">
              <img
                src={musicImg}
                alt="musicImg"
                className=" block lg:w-[50px] lg:h-[80px]"
              />
              <div className=" lg:text-center lg:justify-center lg:mt-8 lg:ml-8">
                <button className=" lg:text-[25px] "> Music</button>
              </div>
            </div>
            <div className=" lg:w-[300px] lg:h-[150px] lg:flex lg:flex-row  w-[164px] h-[84px] bg-[#EEEEEE] rounded-2xl p-4">
              <img
                src={musicImg}
                alt="musicImg"
                className=" block lg:w-[50px] lg:h-[80px]"
              />
              <div className=" lg:text-center lg:justify-center lg:mt-8 lg:ml-8">
                <button className=" lg:text-[25px] "> Tech</button>
              </div>
            </div>
            <div className=" lg:w-[300px] lg:h-[150px] lg:flex lg:flex-row w-[164px] h-[84px] bg-[#B0E298] rounded-2xl p-4">
              <img
                src={musicImg}
                alt="musicImg"
                className=" block lg:w-[50px] lg:h-[80px]"
              />
              <div className=" lg:text-center lg:justify-center lg:mt-8 lg:ml-0">
                <button className=" lg:text-[25px] "> Arts & Culture</button>
              </div>
            </div>
            <div className=" lg:w-[300px] lg:h-[150px] lg:flex lg:flex-row w-[164px] h-[84px] bg-[#FFC971] rounded-2xl p-4">
              <img
                src={musicImg}
                alt="musicImg"
                className=" block lg:w-[50px] lg:h-[80px]"
              />
              <div className=" lg:text-center lg:justify-center lg:mt-8 lg:ml-8">
                <button className=" lg:text-[25px] "> Business</button>
              </div>
            </div>
          </div>

          <div className=" lg:w-[40vw] mt-12 lg:pt-7 lg:pb-5 text-[24px] h-[32px] font-manrope">
            <h1 className=" lg:text-[30px] lg:font-bold font-extrabold">
              Upcoming Events
            </h1>
          </div>
          <div className=" lg:w-[40vw] mt-14 w-full font-manrope">
            {searchresults.map((event) => {
              return (
                <div
                  key={event.id}
                  className=" flex gap-4 px-4 w-[full] justify-between mb-8 items-center"
                >
                  <div className=" flex flex-col gap-4 w-2/3">
                    <div className=" lg:text-[20px] flex justify-start items-center gap-10">
                      {" "}
                      <p>{event.date}</p>
                      <p className=" lg:text-[20px] lg:w-[80px] bg-[#FF0909] bg-opacity-[13%] w-[59px] h-[24px] rounded-lg text-[#FF0909] font-bold text-[12px] flex justify-center items-center">
                        {event.cost}
                      </p>
                    </div>
                    <div className=" mb-1">
                      <p className=" lg:mt-4 lg:text-[27px] font-extrabold text-[25px] text-lg">
                        {event.title}
                      </p>
                      <div className=" flex justify-start items-center gap-4 w-full mt-4">
                        <div className=" w-[24px] h-[24px] rounded-full">
                          <img
                            className="  w-full h-full object-cover"
                            src={event.authorImage}
                            alt=""
                          />
                        </div>
                        <p className=" lg:text-[22px]">{event.covener}</p>
                      </div>
                      <div className=" flex justify-start items-center gap-4 w-full mt-4">
                        <div className=" w-[24px] h-[24px] rounded-full">
                          <img
                            className="  w-full h-full object-cover"
                            src={event.location1}
                            alt=""
                          />
                        </div>
                        <p className=" lg:text-[21px] lg:mb-6">
                          {event.location}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" w-[122px] h-[140px] rounded-xl">
                    <img
                      className=" rounded-2xl w-full h-full object-cover"
                      src={require("../img/" + event.img + ".png")}
                      alt={event.title}
                    />
                  </div>
                </div>
              );
            })}

            <div className=" lg:text-[24px]">
              <Link to="/attendees">
                <Button1 title={"Discover more"} />
              </Link>
            </div>
          </div>

          <div className="m-5 font-manrope">
            <div className=" lg:w-[40vw] mt-12 lg:pt-7 lg:pb-5 text-[24px] h-[32px] font-manrope">
              <h1 className=" lg:text-[30px] lg:font-bold font-extrabold">
                Sport Events
              </h1>
            </div>
            <div className=" lg:w-[40vw] mt-14 w-full font-manrope">
              {sports.map((sport) => {
                return (
                  <div
                    key={sport.id}
                    className=" flex gap-4 px-4 w-[full] justify-between mb-8 items-center"
                  >
                    <div className=" flex flex-col gap-4 w-2/3">
                      <div className=" lg:text-[20px] flex justify-start items-center gap-10">
                        {" "}
                        <p>{sport.date}</p>
                        <p className=" lg:text-[20px] lg:w-[80px] bg-[#FF0909] bg-opacity-[13%] w-[59px] h-[24px] rounded-lg text-[#FF0909] font-bold text-[12px] flex justify-center items-center">
                          {sport.cost}
                        </p>
                      </div>
                      <div className=" mb-1">
                        <p className=" lg:mt-4 lg:text-[27px] font-extrabold text-[25px] text-lg">
                          {sport.title}
                        </p>
                        <div className=" flex justify-start items-center gap-4 w-full mt-4">
                          <div className=" w-[24px] h-[24px] rounded-full">
                            <img
                              className=" w-full h-full object-cover"
                              src={sport.authorImage}
                              alt=""
                            />
                          </div>
                          <p className=" lg:text-[22px]">{sport.covener}</p>
                        </div>
                        <div className=" flex justify-start items-center gap-4 w-full mt-4">
                          <div className=" w-[24px] h-[24px] rounded-full">
                            <img
                              className=" w-full h-full object-cover"
                              src={sport.location1}
                              alt=""
                            />
                          </div>
                          <p className=" lg:text-[21px] lg:mb-6">
                            {sport.location}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" w-[122px] h-[140px] rounded-xl">
                      <img
                        className=" rounded-2xl w-full h-full object-cover"
                        src={require("../img/" + sport.img + ".png")}
                        alt={sport.title}
                      />
                    </div>
                    <div className=" float-none"></div>
                  </div>
                );
              })}
              <Link to="/attendees">
                <Button1 title={"Discover more"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabLists;
