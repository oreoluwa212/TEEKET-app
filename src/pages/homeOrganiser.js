import React from 'react';
import Nav from '../components/nav';
import Home from '../components/organiser';
import FooterPage from "../components/pagefooter";


function HomeOrganiser() {
    return (
      <div>
        <Nav />
        <Home />
        <FooterPage />
      </div>
    );
}

export default HomeOrganiser;
