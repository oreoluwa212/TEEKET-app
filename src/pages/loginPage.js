import React from "react";
import MobileLogin from "../components/mobileLogin";
import Nav from "../components/nav";
import FooterPage from "../assets/images/Footer.png";


function Login() {
  return (
    <div>
      <Nav />
      <MobileLogin />
      <img className=" w-[100vw] my-8" src={FooterPage} alt="Page footer"/>
    </div>
  );
}

export default Login;
