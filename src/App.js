import { BrowserRouter, Route, Routes } from "react-router-dom";

import "../src/styles/App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LandingPage from "../src/pages/landingPage";
import EventLists from "../src/pages/eventLists";
import Login from "../src/pages/loginPage";
import Attendees from '../src/pages/attendeesPage';
import HomeOrganiser from "../src/pages/homeOrganiser";

function App() {
  return (
   <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/eventLists" element={<EventLists/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/attendees" element={<Attendees />} />
          <Route path="/home" element={<HomeOrganiser />} />

        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
