import React from "react";
import Footer from "../components/footer"
import Nav from "../components/nav";
import Attendees from '../components/attendees'
// import FooterPage from "../assets/images/Footer.png";
import PageFooter from "../components/pagefooter";

function Login() {
  return (
    <div>
      <Nav />
      <Attendees />
      <Footer />
      <PageFooter/>
    </div>
  );
}

export default Login;
