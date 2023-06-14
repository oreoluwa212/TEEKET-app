import React from "react";
import Footer from "../components/footer"
import Nav from "../components/nav";
import Attendees from '../components/attendees'
import FooterPage from "../assets/images/Footer.png";

function Login() {
  return (
    <div>
      <Nav />
      <Attendees />
      <Footer />
      <img className=" w-[100vw] my-8" src={FooterPage} alt="Page footer" />
    </div>
  );
}

export default Login;
