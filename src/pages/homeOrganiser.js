import React from 'react';
import Nav from '../components/nav';
import Home from '../components/organiser';
import FooterPage from "../assets/images/Footer.png";


function HomeOrganiser() {
    return (
      <div>
        <Nav />
        <Home />
        <img className=" w-[100vw] my-8" src={FooterPage} alt="Page footer" />
      </div>
    );
}

export default HomeOrganiser;
