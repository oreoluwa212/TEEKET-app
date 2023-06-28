import google from "../img/google.png";
import { dataBase } from "../firebase.config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";

import { toast } from "react-toastify";


function MobileLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

const onSubmit = async (e) => {
  e.preventDefault();
  try {
    const auth = getAuth();
    const existingUser = await getDoc(doc(dataBase, "users", email));

    if (!existingUser.exists()) {
      // Create a new account
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(
        doc(dataBase, "users", userCredential.user.uid),
        formDataCopy
      );
      navigate("/home");
      toast.success("Account creation and login were successful!");
    } else {
      try {
        // Sign in the user
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        navigate("/home");
        toast.success("Login was successful!");
      } catch (error) {
        // Handle the error when signing in with existing email
        toast.error("Account exists already.");
      }
    }
  } catch (error) {
      toast.error("Something went wrong");
    }
  };

const onGoogleClick = async () => {
  try {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // check for user
    const docRef = doc(dataBase, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      await setDoc(doc(dataBase, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        timestamp: serverTimestamp(),
      });
    }
    navigate("/home");
    toast.success("Login was successful!");
  } catch (error) {
   toast.error("Could not authorize with Google.");
  }
};

  return (
    <div className=" overflow-hidden lg:w-full lg:h-[30vw] lg:pt-10 container font-manrope mx-auto flex max-[420px]:justify-center max-[420px]:mx-5 justify-center text-center mb-6 lg:mt-[10px]">
      <div className=" lg:w-[100%]">
        <h2 className=" text-black text-center font-bold mt-7 mr-5 lg:pt-2 pb-8  text-[23px] lg:text-[32px]">
          Log in or sign up to continue
        </h2>
        <div className=" flex justify-center mb-6">
          <button
            onClick={onGoogleClick}
            className=" cursor-pointer flex w-full border-none justify-center items-center lg:w-[70%]"
          >
            <img
              className=" lg w-8"
              onClick={onGoogleClick}
              src={google}
              alt=" google"
            />
            <p
              onClick={onGoogleClick}
              className=" cursor-pointer mx-2 text-[19px] font-extrabold lg:text-[28px] text-center justify-center"
            >
              Continue with Google
            </p>
          </button>
        </div>
        <div className="flex justify-center items-center pb-6">
          <div className=" border w-[48%] lg:w-[28%]"></div>
          <p className=" px-3 text-[#8F8F8F]">or</p>
          <div className=" mr-9 border w-[48%] lg:w-[28%]"></div>
        </div>
        <div className=" max-[420px]:mx-4 justify-center items-center lg:mb-[40px]">
          <form className="  flex flex-col w-[100%] lg:justify-center lg:items-center max-[420px]:justify-center max-[420px]:justify-items-center lg:mb-[40px]">
            <input
              type="text"
              id="email"
              onChange={onChange}
              name="email"
              value={email}
              autoComplete="On"
              placeholder="Enter your email address"
              className="text-[#8F8F8F] 	mb-6 pb-6 bg-[#EDEDED] block  px-6 py-5 rounded-xl focus:outline-none focus:border-sky-500 placeholder:text-[#8F8F8F] placeholder-gray-500::placeholder text-lg font-semibold  lg:rounded-[15px] lg:pt-6 lg:text-[23px] lg:w-[50%] lg:h-[80px] h-[60px] w-[85%] "
            />
            <input
              type="password"
              id="password"
              onChange={onChange}
              name="password"
              value={password}
              autoComplete="On"
              placeholder="Password"
              className="text-[#8F8F8F] 	mb-6 pb-6 bg-[#EDEDED] block  px-6 py-5 rounded-xl focus:outline-none focus:border-sky-500 placeholder:text-[#8F8F8F] placeholder-gray-500::placeholder text-lg font-semibold  lg:rounded-[15px] lg:pt-6 lg:text-[23px] lg:w-[50%] lg:h-[80px]   h-[60px] w-[85%] "
            />
            <button
              onClick={onSubmit}
              className="text-white bg-[#0052F6]	mb-6 pb-6 block  px-6 py-5 rounded-xl focus:outline-none focus:border-sky-500  font-semibold  lg:rounded-[10px] lg:pt-6 lg:text-[23px] lg:w-[50%] lg:mb-0 lg:h-[80px]   h-[60px] w-[85%] "
            >
              Continue with email
            </button>
          </form>
          <div className="flex justify-center mt-5 w-100% lg:w-[80vw] lg:mt-0 lg:mb-3">
            <p className=" lg:text-[22px] mr-3 text-[#8f8f8f] text-center w-85 ">
              By continuing, you acknowledge that you have read and understand,
              and agree to Teeket's{" "}
              <span className=" font-extrabold underline text-[#101010]">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className=" font-extrabold underline text-[#000000] ">
                Privacy Policy
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileLogin;
