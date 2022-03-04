import React, {useState} from "react";
import '../App.css';
import '../App.scss';
import { Icsearch,Icsearchbar, Icsearchlist, Icrighticonfooter, Icsignincolored, IcClose, Logo, Icemail, Icbackb, Icshowhidden } from "./Icon";
import { Link } from 'react-router-dom';
function Mobstickyfooter() {
  const [showModal, setShowModal] = React.useState(false);
const [showModal1, setShowModal1] = React.useState(false);
const [passwordShown, setPasswordShown] = useState(false);
const togglePassword = () => {
setPasswordShown(!passwordShown);
};
const [isShowDropdown, setIsShowDropdown] = useState(false)
 const onPresFirstButton = ()=> {
   setIsShowDropdown(true)
   //setIsShowbtn1(true)
 }
return (
  // <section className="py-10 md:py-10  bg-graydark-900 ">
  <section className="bg-white flex lg:hidden py-2 border-t border-bordergray-200 fixed w-full bottom-0 z-50">
     <div className="space-x-2 md:space-x-10 w-full flex">
      <div className="w-1/3 flex justify-center items-center text-center">
          <button onClick={()=> setIsShowDropdown(!isShowDropdown)} className="flex items-center justify-center flex-col" href="#">
            <Icsearch/>
            <p className="text-primarycolor text-sm font-semibold mt-2">Explore</p>
          </button>
      </div>
      <div className="w-1/3 flex justify-center items-center text-center">
            <Link to="/Review-Visited-Place">
               <button className="flex items-center justify-center flex-col">
                  <Icrighticonfooter/>
                  <p className="text-primarycolor text-sm font-semibold mt-2">Review</p>
               </button>
            </Link>
      </div>
      <div className="w-1/3 flex justify-center items-center text-center">
          <button className="flex items-center justify-center flex-col " href="#"
           onClick={() => setShowModal(true)}>
            <Icsignincolored/>
            
            <p className="text-primarycolor text-sm font-semibold mt-2 ">Sign In</p>
          </button>
          {showModal ? (
<>
<div
   className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[110] outline-none focus:outline-none top-0"
   >
   <div className="relative w-full my-6 mx-auto max-w-lg h-screen scroll flex items-center">
      <div className="border-0  sm:rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-screen lg:h-auto">
         <div className="">
            <button
               className="p-5 ml-auto bg-transparent border-0 text-primarcolor float-right  leading-none  outline-none focus:outline-none"
               onClick={() =>
               setShowModal(false)}
               >
               <IcClose/>
            </button>
         </div>
         <div className="relative pt-0 p-4 sm:p-14 flex-auto">
            <div className="logo">
               <Logo/>
            </div>
            <h3 className="text-primarycolor text-3xl font-bold pr-0 md:pr-5 mt-6  lg:pr-8 capitalize">
               Sign in to unlock the best of TMI.
            </h3>
            <form className="bg-white py-6">
               <div className="mb-3">
                  <input className="font-outfit appearance-none border border-inputborder rounded-md w-full h-10 py-2 px-3 text-secondarycolor placeholder:text-secondarycolor font-normal leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email/Phone No"/>
               </div>
               <div className="mb-0 relative">
                  <input className="font-outfit appearance-none border border-inputborder rounded-md w-full h-10 py-2 px-3 text-secondarycolor placeholder:text-secondarycolor font-normal leading-tight focus:outline-none focus:shadow-outline" id="password" type={passwordShown ? "text" : "password"} placeholder="Password"/>
                  <p className="cursor-pointer absolute text-center flex justify-center items-center bg-white right-1 top-1 w-10 h-8" onClick={togglePassword}>
                     <Icshowhidden/>
                  </p>
               </div>
               <div className="flex flex-col items-center justify-between">
                  <a className="flex w-full justify-end my-3 font-normal text-sm text-textlightgray hover:text-primarycolor" href="#">
                  Forgot your password?
                  </a>
                  <button className="w-full flex uppercase justify-center bg-orangecolor hover:bg-white hover:text-orangecolor border border-orangecolor-200 text-white font-medium h-10 flex items-center px-3 md:px-5 rounded-full text-sm" type="button">
                  Login
                  </button>
               </div>
               <div className="flex mt-10 mb-8 items-center text-center">
                  <hr className="border-inputborder border-1 w-full rounded-md"/>
                  <label className="block font-normal text-xs sm:text-sm text-textlightgray w-full">Or Continue With</label>
                  <hr className="border-inputborder border-1 w-full rounded-md"/>
               </div>
               <div className="flex mt-7 justify-center w-full">
                  <button className="w-28 md:w-32 h-10 mr-2 flex justify-center border border-inputborder text-textlightgray font-normal items-center px-0 md:px-5 rounded-md text-xs sm:text-sm" type="button">
                  <img className="w-6 sm:w-auto" src="assets/img/ic_google.png" alt="icon" /> Google
                  </button>
                  <button className="w-28 md:w-32 h-10 mr-2 flex justify-center border border-inputborder text-textlightgray font-normal items-center px-0 md:px-5 rounded-md text-xs sm:text-sm" type="button">
                  <img className="w-6 sm:w-auto" src="assets/img/ic_facebook.png" alt="icon" /> Facebook
                  </button>
                  <button className="w-28 md:w-32 h-10 flex justify-center border border-inputborder text-textlightgray font-normal items-center px-0 md:px-5 rounded-md text-xs sm:text-sm" type="button">
                  <img className="w-6 sm:w-auto" src="assets/img/ic_apple.png" alt="icon" /> Apple
                  </button>
               </div>
               <div className="mt-2 flex w-full">
                  <button className="w-full h-10 capitalize flex justify-center border border-inputborder text-secondarycolor font-normal items-center px-1 md:px-5 rounded-md text-sm" type="button"
                     onClick={() =>
                     {setShowModal1(true); setShowModal(false)} }
                     >
                     <Icemail/>
                     Create your account
                  </button>
               </div>
            </form>
         </div>
      </div>
   </div>
</div>
<div className="opacity-50 fixed inset-0 z-[100] bg-black"></div>
</>
) : null}
{/* Create account modal */}
{showModal1 ? (
<>
<div
   className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[110] outline-none focus:outline-none top-0"
   >
   <div className="relative w-full my-6 mx-auto max-w-lg h-screen scroll flex items-center">
      <div className="border-0  sm:rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-screen lg:h-auto">
         <div className="flex justify-between">
            <button
               className="p-5 bg-transparent border-0 text-primarcolor float-right  leading-none  outline-none focus:outline-none"
               onClick={() =>
               {setShowModal(true); setShowModal1(false)} }
               >
               <Icbackb/>
            </button>
            <button
               className="p-5 ml-auto bg-transparent border-0 text-primarcolor float-right  leading-none  outline-none focus:outline-none"
               onClick={() =>
               setShowModal1(false)}
               >
               <IcClose/>
            </button>
         </div>
         <div className="relative pt-0 p-4 sm:p-14 flex-auto">
            <div className="logo">
               <Logo/>
            </div>
            <h3 className="text-primarycolor text-3xl font-bold pr-6 md:pr-6 mt-6  lg:pr-16 capitalize">
               Join to unlock the best of TMI
            </h3>
            <form className="bg-white py-6">
               <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="w-full">
                     <label className="block capitalize tracking-wide text-gray-700 text-sm font-normal mb-1.5 text-left" for="grid-first-name">
                     First Name
                     </label>
                     <input className="font-outfit appearance-none border border-inputborder rounded-md w-full h-10 py-2 px-3 text-secondarycolor placeholder:text-secondarycolor font-normal leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=""/>
                  </div>
                  <div className="w-full">
                     <label className="block capitalize tracking-wide text-gray-700 text-sm font-normal mb-1.5 text-left" for="grid-first-name">
                     Last Name
                     </label>
                     <input className="font-outfit appearance-none border border-inputborder rounded-md w-full h-10 py-2 px-3 text-secondarycolor placeholder:text-secondarycolor font-normal leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=""/>
                  </div>
               </div>
               <div className="mb-4">
                  <label className="block capitalize tracking-wide text-gray-700 text-sm font-normal mb-1.5 text-left" for="grid-first-name">
                  Email
                  </label>
                  <input className="font-outfit appearance-none border border-inputborder rounded-md w-full h-10 py-2 px-3 text-secondarycolor placeholder:text-secondarycolor font-normal leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=""/>
               </div>
               <div className="mb-0 ">
                  <label className="block capitalize tracking-wide text-gray-700 text-sm font-normal mb-1.5 text-left" for="grid-first-name">
                  Create password
                  </label>
                  <div className="relative">
                     <input className="font-outfit appearance-none border border-inputborder rounded-md w-full h-10 py-2 px-3 text-secondarycolor placeholder:text-secondarycolor font-normal leading-tight focus:outline-none focus:shadow-outline" id="password" type={passwordShown ? "text" : "password"} placeholder=""/>
                     <p className="cursor-pointer absolute text-center flex justify-center items-center bg-white right-1 top-1 w-10 h-8" onClick={togglePassword}>
                        <Icshowhidden/>
                     </p>
                  </div>
               </div>
               <div className="flex flex-col items-center justify-between">
                  <div className="form-check w-full my-4">
                     <label className="w-full flex text-textlightgray font-normal">
                     <input className="mr-2 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                     <span className="text-sm">
                     Yes, inform me on deals & new features. I can opt out at any time.
                     </span>
                     </label>
                  </div>
                  <button className="w-full flex uppercase justify-center bg-orangecolor hover:bg-white hover:text-orangecolor border border-orangecolor-200 text-white font-medium h-10 flex items-center px-3 md:px-5 rounded-full text-sm" type="button">
                  Join
                  </button>
               </div>
               <div className="flex mt-10 mb-6 items-center text-center">
                  <hr className="border-inputborder border-1 w-full rounded-md"/>
                  <label className="block font-normal text-xs sm:text-sm text-textlightgray w-full whitespace-no-wrap">Already a member?</label>
                  <hr className="border-inputborder border-1 w-full rounded-md"/>
               </div>
               <div className="mt-2 flex w-full">
                  <button className="w-full capitalize flex justify-center  text-secondarycolor font-normal items-center px-1 md:px-5 rounded-md text-sm" type="button"
                     onClick={() =>
                     {setShowModal(true); setShowModal1(false)} }
                     >
                     <p><b>Log In </b> Using Your TMI Account</p>
                  </button>
               </div>
            </form>
         </div>
      </div>
   </div>
</div>
<div className="opacity-50 fixed inset-0 z-[100] bg-black"></div>
</>
) : null}
{/* End modal */}
      </div>
      
     </div>
     {/* search-list-mobile */}
{ isShowDropdown ? 
   <div className=" flex flex-col max-w-lg mx-auto px-5 right-0 left-0 text-sm focus:outline-none fixed top-4 w-full z-[100] search_bx">
   <div className="relative mx-auto w-full mt-6 md:mt-10 z-[100] h-12 ">
      <input autoComplete="off" className=" z-[100] w-full border border-bordergray-200 bg-white px-5 pr-16 h-14 rounded-2xl text-sm focus:outline-none absolute" type="search" name="search" placeholder="Where to?"/>
      <button type="submit" className="absolute z-[100] right-0 top-2  mr-2"  >
         <Icsearchbar/>
      </button>
   </div>
   <div className="opacity-90 fixed inset-0 z-1 bg-white" onClick={()=> setIsShowDropdown(!isShowDropdown)} ></div>
   <ul className="flex-col w-full py-4 pt-2 px-3 lg:px-6 top-1 relative z-[110] bg-white rounded-2xl border border-bordergray-200 mt-1.5">
      <li><p className="font-bold text-sm uppercase mt-2 mt-4 mb-4 text-secondarycolor">Recently Viewed</p></li>
      <li className="w-full border-b border-bordergray-200 hover:bg-bordergray-50 py-2 px-2">
         <Link to="/Search-Result" className="cursor-pointer">
         <div className="flex items-center">
            <img className="rounded" src="assets/img/img_listimg1.png"/>
            <div className="flex flex-col ml-4">
               <h6 className="font-semibold text-base text-secondarycolor">TajMahal</h6>
               <p className="text-light-gray-t text-sm font-normal">Agra District, India</p>
            </div>
         </div>
         </Link>
         </li>
         <li className="w-full border-b border-bordergray-200 hover:bg-bordergray-50 py-2 px-2">
         <Link to="/Search-Result" className="cursor-pointer">
         <div className="flex items-center">
         <img className="rounded" src="assets/img/img_listimg2.png"/>
         <div className="flex flex-col ml-4">
            <h6 className="font-semibold text-base text-secondarycolor">Shimla</h6>
            <p className="text-light-gray-t text-sm font-normal">Himanchal District, India</p>
         </div>
         </div>
         </Link>
         </li>
         <li className="w-full border-b border-bordergray-200 hover:bg-bordergray-50 py-2 px-2">
         <Link to="/Search-Result" className="cursor-pointer">
         <div className="flex items-center">
         <img className="rounded" src="assets/img/img_listimg1.png"/>
         <div className="flex flex-col ml-4">
            <h6 className="font-semibold text-base text-secondarycolor">TajMahal</h6>
            <p className="text-light-gray-t text-sm font-normal">Agra District, India</p>
         </div>
         </div>
         </Link>
         </li>
         <li className="w-full border-b border-bordergray-200 hover:bg-bordergray-50 py-2 px-2">
         <Link to="/Search-Result" className="cursor-pointer">
         <div className="flex items-center">
         <img className="rounded" src="assets/img/img_listimg2.png"/>
         <div className="flex flex-col ml-4">
            <h6 className="font-semibold text-base text-secondarycolor">Shimla</h6>
            <p className="text-light-gray-t text-sm font-normal">Himanchal District, India</p>
         </div>
         </div>
         </Link>
         </li>
         <li className="w-full pt-3">
         <Link to="/Search-Result" className="cursor-pointer">
         <div className="flex items-center">
         <Icsearchlist/>
         <div className="flex flex-col ml-4">
            <h6 className="font-semibold text-base text-secondarycolor ml-2">See All result for “taj”</h6>
         </div>
         </div>
         </Link>
         </li>
   </ul>
   </div>: null
   }                 
{/* end search-list-mobile */}
  </section>
);
}
export default Mobstickyfooter;