import React from "react";
import TabLists from "../components/tabLists";
import Nav from "../components/nav";
import PageFooter from "../components/pagefooter";



function EventLists() {
  return (
    <div className='mt-0 w-screen flex flex-col gap-6'>
      <Nav />
      <TabLists />
      <PageFooter/>
    </div>
  );
}

export default EventLists;
