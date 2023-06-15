import React from "react";
import MobileLogin from "../components/mobileLogin";
import Nav from "../components/nav";
import PageFooter from "../components/pagefooter";


function Login() {
  return (
    <div>
      <Nav />
      <MobileLogin />
      <PageFooter/>
    </div>
  );
}

export default Login;
