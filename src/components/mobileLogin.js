import google from "../img/google.png";
// import Button from "../components/Button"; 
// import { Link } from "react-router-dom";
import { useState } from "react";

import { auth } from "../firebase.config";
import {
  //signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { toast } from "react-toastify";


function MobileLogin() {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const signUp = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword( auth, email, password )
    .then((userCredential) => {
      console.log(userCredential);
      toast.success("Login was successful!");

    }).catch((error) => {
      console.log(error);
      toast.error("Something went wrong");

    });
  }
  return (
    <div className="mx-auto w-[90%] min-[400px]:w-[90vw] mt-6 lg:w-[30%] font-manrope ">
      <h2 className=" text-black text-center font-bold py-14  text-[20px]">
        Log in or sign up to continue
      </h2>
      <div className=" flex justify-center pb-6">
        <button className=" flex px-20 w-full border-none rounded-xl justify-center items-center">
          <img className="" src={google} alt=" google" />
          <p className=" mt-1 mx-2 font-bold">Continue with Google</p>
        </button>
      </div>
      <div className="flex justify-center items-center pb-6">
        <div className="border w-[48%]"></div>
        <p className="px-3 text-[#8F8F8F]">or</p>
        <div className="border w-[48%]"></div>
      </div>
      <div className="">
        <form
          onSubmit={signUp}
          className="grid w-full justify-items-center pb-6"
        >
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            value={email}
            autoComplete="On"
            placeholder="Enter your email address"
            className="text-[#8F8F8F] text-base	mb-6 pb-6 bg-[#EDEDED] block w-full px-6 py-5 rounded-xl focus:outline-none focus:border-sky-500 placeholder:text-[#8F8F8F]"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            autoComplete="On"
            placeholder="Password"
            className="text-[#8F8F8F] text-base bg-[#EDEDED] block w-full px-6 py-5 rounded-xl focus:outline-none focus:border-sky-500 placeholder:text-[#8F8F8F]"
          />
          <button className="text-white bg-[#0052F6] w-full px-4 rounded-xl h-[60px] font-bold text-[16px] mt-5 ">
            Continue with email
          </button>
        </form>
        <div className="flex justify-center mt-5 w-100%">
          <p className=" text-[#8f8f8f] text-center w-85 ">
            By continuing, you acknowledge that you have read and understand,
            and agree to Teeket's{" "}
            <span
              style={{
                fontWeight: "700",
                textDecoration: "underline",
                color: "#101010",
              }}
            >
              Terms of Service
            </span>{" "}
            and{" "}
            <span
              style={{
                fontWeight: "700",
                textDecoration: "underline",
                color: "#101010",
              }}
            >
              Privacy Policy
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default MobileLogin;
