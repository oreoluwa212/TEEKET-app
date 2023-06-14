import google from "../img/google.png";
import Button from '../components/Button';

function MobileLogin() {
   return (
     <div className="mx-auto w-[90%] min-[400px]:w-[90vw] mt-6 lg:w-[30%] font-manrope ">
       <h2 className=" text-black text-center font-bold py-14  text-[20px]">
         Log in or sign up to continue
       </h2>
       <div className=" flex justify-center pb-6">
         <button className=" flex py-4 px-20 w-full border-none rounded-xl">
           <div className=" bg-[#FFFFFF] border-none flex justify-center pb-6">
             <img className="" src={google} alt=" google" />
             <p className=" mt-1 mx-2 font-bold">Continue with Google</p>
           </div>
         </button>
       </div>
       <div className="flex justify-center items-center pb-6">
         <div className="border w-[48%]"></div>
         <p className="px-3 text-[#8F8F8F]">or</p>
         <div className="border w-[48%]"></div>
       </div>
       <div className="">
         <form className="grid w-full  justify-items-center pb-6">
           <input
             type="email"
             placeholder="Enter your email address"
             className="text-[#8F8F8F] text-base	mb-6 pb-6 bg-[#EDEDED] block w-full px-6 py-5 rounded-xl focus:outline-none focus:border-sky-500 placeholder:text-[#8F8F8F]"
           />
           <input
             type="password"
             placeholder="Password"
             className="text-[#8F8F8F] text-base bg-[#EDEDED] block w-full px-6 py-5 rounded-xl focus:outline-none focus:border-sky-500 placeholder:text-[#8F8F8F]"
           />
         </form>
         <Button title={"Continue with email"} onClick={() => {
        alert('Sign in')
      }} />
      <div className='flex justify-center mt-5 w-100%'>
        <p className=" text-[#8f8f8f] text-center w-85 ">By continuing, you acknowledge that you have read and understand, and agree to Teeket's <span style={{fontWeight: '700', textDecoration: 'underline', color: '#101010'}}>Terms of Service</span> and <span style={{fontWeight: '700', textDecoration: 'underline', color: '#101010'}}>Privacy Policy</span>.</p>
      </div>
       </div>
     </div>
   );
}

export default MobileLogin;