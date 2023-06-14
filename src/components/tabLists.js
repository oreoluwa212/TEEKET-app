import React from "react";
import musicImg from "../img/music_note.png";
import { useState } from "react";
import search from "../img/search_icon.png";
import searchBar from "../img/Search bar.png";
import { events, sports } from "../data";
import Button1 from '../components/Button1';
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
    <div className=" container mx-auto p-4 max-w-screen-sm font-manrope">
      <div className=" flex justify-center">
        <div className=" w-full max-w-md pr-6">
          <p className="font-manrope mt-16 text-[24px] font-medium">
            Discover events near you
          </p>
          <div className=" mt-5 flex justify-between">
            <div className="flex bg-[#F5F5F5] rounded-2xl w-90">
              <img
                src={search}
                alt="search"
                className=" h-8 mt-4 mb-4 ml-4 pl-2 "
              />
              <input
                type="text"
                placeholder="Search all events"
                className=" outline-none  rounded-2xl border-none text-[20px] font-medium bg-[#F5F5F5]"
                value={searchval}
                onChange={filterEvents}
              />
            </div>
            <div className=" mt- ">
              <img
                src={searchBar}
                alt="search"
                onClick={clearSearchBar}
                className=" mr-3"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-9">
            <div className=" w-[164px] h-[84px] bg-[#FBBF0A] rounded-2xl p-4">
              <img src={musicImg} alt="musicImg" className=" block" />
              <button>Music</button>
            </div>
            <div className=" w-[164px] h-[84px] bg-[#EEEEEE] rounded-2xl p-4">
              <img src={musicImg} alt="musicImg" className=" block" />
              <button> Tech</button>
            </div>
            <div className=" w-[164px] h-[84px] bg-[#B0E298] rounded-2xl p-4">
              <img src={musicImg} alt="musicImg" className=" block" />
              <button> Arts & Culture</button>
            </div>
            <div className=" w-[164px] h-[84px] bg-[#FFC971] rounded-2xl p-4">
              <img src={musicImg} alt="musicImg" className=" block" />
              <button>Business</button>
            </div>
          </div>

          <div className=" mt-12 text-[24px] h-[32px] font-manrope">
            <h1 className=" font-extrabold">Upcoming Events</h1>
          </div>
          <div className=" mt-14 w-full font-manrope">
            {searchresults.map((event) => {
              return (
                <div
                  key={event.id}
                  className=" flex gap-4 px-4 w-[full] justify-between mb-8 items-center"
                >
                  <div className=" flex flex-col gap-4 w-2/3">
                    <div className=" flex justify-start items-center gap-10">
                      {" "}
                      <p>{event.date}</p>
                      <p className=" bg-[#FF0909] bg-opacity-[13%] w-[59px] h-[24px] rounded-lg text-[#FF0909] font-bold text-[12px] flex justify-center items-center">
                        {event.cost}
                      </p>
                    </div>
                    <div className=" mb-1">
                      <p className=" font-extrabold text-[25px] text-lg">
                        {event.title}
                      </p>
                      <div className=" flex justify-start items-center gap-4 w-full mt-4">
                        <div className=" w-[24px] h-[24px] rounded-full">
                          <img
                            className=" w-full h-full object-cover"
                            src={event.authorImage}
                            alt=""
                          />
                        </div>
                        <p className=" ">{event.covener}</p>
                      </div>
                      <div className=" flex justify-start items-center gap-4 w-full mt-4">
                        <div className=" w-[24px] h-[24px] rounded-full">
                          <img
                            className=" w-full h-full object-cover"
                            src={event.location1}
                            alt=""
                          />
                        </div>
                        <p className="">{event.location}</p>
                      </div>
                    </div>
                  </div>
                  <div className=" w-[122px] h-[140px] rounded-xl">
                    <img
                      className=" w-full h-full object-cover"
                      src={require("../img/" + event.img + ".png")}
                      alt={event.title}
                    />
                  </div>
                </div>
              );
            })}

            <Link to="/login">
              <Button1 title={"Discover more"} />
            </Link>
          </div>

          <div className="m-5 font-manrope">
            <div className=" mt-12 text-[24px] h-[32px] font-manrope">
              <h1 className=" font-extrabold">Sport Events</h1>
            </div>
            <div className=" mt-14 w-full font-manrope">
              {sports.map((sport) => {
                return (
                  <div
                    key={sport.id}
                    className=" flex gap-4 px-4 w-[full] justify-between mb-8 items-center"
                  >
                    <div className=" flex flex-col gap-4 w-2/3">
                      <div className=" flex justify-start items-center gap-10">
                        {" "}
                        <p>{sport.date}</p>
                        <p className=" bg-[#FF0909] bg-opacity-[13%] w-[59px] h-[24px] rounded-lg text-[#FF0909] font-bold text-[12px] flex justify-center items-center">
                          {sport.cost}
                        </p>
                      </div>
                      <div className=" mb-1">
                        <p className=" font-extrabold text-[25px] text-lg">
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
                          <p className=" ">{sport.covener}</p>
                        </div>
                        <div className=" flex justify-start items-center gap-4 w-full mt-4">
                          <div className=" w-[24px] h-[24px] rounded-full">
                            <img
                              className=" w-full h-full object-cover"
                              src={sport.location1}
                              alt=""
                            />
                          </div>
                          <p className="">{sport.location}</p>
                        </div>
                      </div>
                    </div>
                    <div className=" w-[122px] h-[140px] rounded-xl">
                      <img
                        className=" w-full h-full object-cover"
                        src={require("../img/" + sport.img + ".png")}
                        alt={sport.title}
                      />
                    </div>
                    <div className=" float-none"></div>
                  </div>
                );
              })}
              <Link to="/login">
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
