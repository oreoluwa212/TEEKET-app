import React from "react";
import MobileLogin from "../components/mobileLogin";
import Nav from "../components/nav";
import PageFooter from "../components/pagefooter";


function Login() {
  return (
    <div className="mt-0 w-screen flex flex-col gap-6">
      <Nav />
      <MobileLogin />
      <PageFooter/>
    </div>
  );
}

export default Login;
