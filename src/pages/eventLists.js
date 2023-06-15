import React from "react";
import TabLists from "../components/tabLists";
import Nav from "../components/nav";
import Footer from "../components/footer";
import PageFooter from "../components/pagefooter";



function EventLists() {
  return (
    <div>
      <Nav />
      <TabLists />
      <Footer />
      <PageFooter/>
    </div>
  );
}

export default EventLists;
