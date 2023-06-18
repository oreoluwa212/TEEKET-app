import React from "react";

import Nav from "../components/nav";
import Attendees from '../components/attendees'

import PageFooter from "../components/pagefooter";

function Login() {
  return (
    <div>
      <Nav />
      <Attendees />

      <PageFooter/>
    </div>
  );
}

export default Login;
