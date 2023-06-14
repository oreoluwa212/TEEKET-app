import React from "react";
import TabLists from "../components/tabLists";
import Nav from "../components/nav";
import Footer from "../components/footer";
import FooterPage from "../assets/images/Footer.png";


function EventLists() {
  return (
    <div>
      <Nav />
      <TabLists />
      <Footer />
      <img className=" w-[100vw] my-8" src={FooterPage} alt="Page footer" />
    </div>
  );
}

export default EventLists;
