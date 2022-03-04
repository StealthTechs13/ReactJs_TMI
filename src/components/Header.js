import React, {useState} from "react";
import '../App.css';
import '../App.scss';
import { Link } from 'react-router-dom';
import { Logo,Icsearchlist,Icsearchbar, Icsignin, Icsearch, Icrighticon, Ichomeicon, Ichamburgermenu, IcClose, IcDropdown, Icshowhidden, IcCloseMenu,Icemail, IcHomeO, Icright, Icbackb} from "./Icon";
function Header({ fixed }) {
const [navbarOpen, setNavbarOpen] = React.useState(false);
const [showModal, setShowModal] = React.useState(false);
const [showModal1, setShowModal1] = React.useState(false);
const [passwordShown, setPasswordShown] = useState(false);
const [isActive, setActive] = useState("false");  
const [isActiveStep3, setActiveStep3] = useState("false"); 
const [isTmi, setTmi] = useState("false");  
const togglePassword = () => {
setPasswordShown(!passwordShown);
};

const handleToggle = () => {
   setActive(!isActive);
   
 };

 const handleToggleStep3 = () => {
   setActiveStep3(!isActiveStep3);
 };

 const handleToggleStepBack = () => {
   setActive(!isActive);
   setActiveStep3(true);
   setActive(false);
 };

 const handleToggleStepBacktmi = () => {
   setTmi(true);
 };

 const handleToggletmirev = () => {
   setTmi(!isTmi);
 };
 const [isShowDropdown, setIsShowDropdown] = useState(false)
 const onPresFirstButton = ()=> {
   setIsShowDropdown(true)
   //setIsShowbtn1(true)
 }
return (
<div className='header'>
   <nav className="border-b border-bordergray-200 lg:border-b-0 relative flex flex-wrap items-center justify-between pt-2 lg:pt-1 p-1 pb-2 lg:pb-0 bg-slat-50">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between static lg:relative">
         <div className="mr-0 lg:mr-7 w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
               className="flex"
               to="/"
               >
               <Logo/>
            </Link>
            <button
               className="text-primarcolor cursor-pointer text-xl leading-none  rounded bg-transparent block lg:hidden outline-none focus:outline-none"
               type="button"
               onClick={() =>
               setNavbarOpen(!navbarOpen)}
               >
               <Ichamburgermenu/>
            </button>
         </div>
         {/* dasktop menu */}
         <div className={"hidden lg:flex flex-grow items-start flex-col lg:flex-row border-t lg:bg-white border-bordergray-200 lg:border-t-0 absolute lg:static top-full w-full lg:w-auto left-0 bg-light-gray-200 z-50" + (navbarOpen ? " flex" : " hidden")}
         id="example-navbar-danger"
         >
         <ul className="flex flex-col lg:flex-row list-none lg:mr-auto w-full lg:w-auto">
            <li className="group inline-block border-b-1 lg:border-b-2 border-white py-0 lg:py-5 hover:border-b-2 hover:border-grad1">
               <Link 
                  className="justify-between lg:justify-start text-primarycolor font-semibold text-sm py-3 lg:py-2 px-4 inline-flex w-full lg:w-auto items-center cursor-pointer">
                  Holidays
                  <IcDropdown/>
               </Link>
               <ul className="w-full static lg:absolute hidden text-gray-700 px-2 lg:px-0 group-hover:block top-15 left-0 bg-light-gray-200 top-full bg-white border-y border-bordergray-200 before:absolute before:w-full before:h-full before:bg-light-gray-200 before:top-px before:-left-full before:border-b before:border-bordergray-200 after:absolute after:w-full after:h-full after:bg-white after:top-px after:-right-full after:border-b after:border-bordergray-200 ">
                  <li className="group1 w-50 lg:border-b-0 border-b flex">
                     <Link 
                        className="text-primarycolor text-sm cursor-pointer bg-gray-400 font-semibold bg-light-gray-200 hover:bg-gray-400 hover:font-semibold pt-8 px-4 flex whitespace-no-wrap w-1/5 relative after:absolute after:right-0 after:bg-orangecolor after:w-0.5 after:h-3 after:top-9 hover:after:absolute hover:after:right-0 hover:after:bg-orangecolor hover:after:w-0.5 hover:after:h-3 hover:after:top-9"
                        to="#"
                        >Destinations</Link>
                     <div className="w-full h-full flex top-0 absolute text-gray-700 py-8 px-2 lg:px-4 top-15 left-auto right-0 w-4/5 groupinner1 bg-white border-l border-bordergray-200">
                        <ul className="px-2 ">
                           <li className="px-4">
                              <h6 className="text-primarycolor pb-2 mb-3 font-semibold text-sm relative after:absolute after:bottom-0 after:border-b after:left-0 after:w-5 after:border-grad1">North India</h6>
                           </li>
                           <li className="lg:border-b-0 border-b  w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Rajasthan
                              </Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Himachal Pradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarakhand</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarpradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >More...</Link>
                           </li>
                        </ul>
                        <ul className="px-2 ">
                           <li className="px-4">
                              <h6 className="text-primarycolor pb-2 mb-3 font-semibold text-sm relative after:absolute after:bottom-0 after:border-b after:left-0 after:w-5 after:border-grad1">North India</h6>
                           </li>
                           <li className="lg:border-b-0 border-b  w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Rajasthan
                              </Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Himachal Pradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarakhand</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarpradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >More...</Link>
                           </li>
                        </ul>
                        <ul className="px-2 ">
                           <li className="px-4">
                              <h6 className="text-primarycolor pb-2 mb-3 font-semibold text-sm relative after:absolute after:bottom-0 after:border-b after:left-0 after:w-5 after:border-grad1">North India</h6>
                           </li>
                           <li className="lg:border-b-0 border-b  w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Rajasthan
                              </Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Himachal Pradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarakhand</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarpradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >More...</Link>
                           </li>
                        </ul>
                        <ul className="px-2 ">
                           <li className="px-4">
                              <h6 className="text-primarycolor pb-2 mb-3 font-semibold text-sm relative after:absolute after:bottom-0 after:border-b after:left-0 after:w-5 after:border-grad1">North India</h6>
                           </li>
                           <li className="lg:border-b-0 border-b  w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Rajasthan
                              </Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Himachal Pradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarakhand</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarpradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >More...</Link>
                           </li>
                        </ul>
                        <ul className="px-2 ">
                           <li className="px-4">
                              <h6 className="text-primarycolor pb-2 mb-3 font-semibold text-sm relative after:absolute after:bottom-0 after:border-b after:left-0 after:w-5 after:border-grad1">North India</h6>
                           </li>
                           <li className="lg:border-b-0 border-b  w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Rajasthan
                              </Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Himachal Pradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarakhand</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarpradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >More...</Link>
                           </li>
                        </ul>
                     </div>
                  </li>
                  <li className="groupi2 w-50 lg:border-b-0 border-b flex">
                     <Link 
                        className="text-primarycolor text-sm cursor-pointer bg-light-gray-200 hover:bg-gray-400 hover:font-semibold pt-8 px-4 flex whitespace-no-wrap w-1/5 relative hover:after:absolute hover:after:right-0 hover:after:bg-orangecolor hover:after:w-0.5 hover:after:h-3 hover:after:top-9"
                        to="#"
                        >Holiday Ideas
                     </Link>
                     <div className=" w-full hidden h-full  flex group-inner:flex top-0 absolute text-gray-700 py-8 px-2 lg:px-4 top-15 left-auto right-0 w-4/5 groupinner2 bg-white border-l border-bordergray-200">
                        <ul className="px-2 ">
                           <li className="px-4">
                              <h6 className="text-primarycolor pb-2 mb-3 font-semibold text-sm relative after:absolute after:bottom-0 after:border-b after:left-0 after:w-5 after:border-grad1">North India</h6>
                           </li>
                           <li className="lg:border-b-0 border-b  w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Rajasthan 123456
                              </Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Himachal Pradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarakhand</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarpradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >More...</Link>
                           </li>
                        </ul>
                        <ul className="px-2 ">
                           <li className="px-4">
                              <h6 className="text-primarycolor pb-2 mb-3 font-semibold text-sm relative after:absolute after:bottom-0 after:border-b after:left-0 after:w-5 after:border-grad1">North India</h6>
                           </li>
                           <li className="lg:border-b-0 border-b  w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Rajasthan
                              </Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Himachal Pradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarakhand</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarpradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >More...</Link>
                           </li>
                        </ul>
                        <ul className="px-2 ">
                           <li className="px-4">
                              <h6 className="text-primarycolor pb-2 mb-3 font-semibold text-sm relative after:absolute after:bottom-0 after:border-b after:left-0 after:w-5 after:border-grad1">North India</h6>
                           </li>
                           <li className="lg:border-b-0 border-b  w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Rajasthan
                              </Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Himachal Pradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarakhand</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarpradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >More...</Link>
                           </li>
                        </ul>
                        <ul className="px-2 ">
                           <li className="px-4">
                              <h6 className="text-primarycolor pb-2 mb-3 font-semibold text-sm relative after:absolute after:bottom-0 after:border-b after:left-0 after:w-5 after:border-grad1">North India</h6>
                           </li>
                           <li className="lg:border-b-0 border-b  w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Rajasthan
                              </Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Himachal Pradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarakhand</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarpradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >More...</Link>
                           </li>
                        </ul>
                        <ul className="px-2 ">
                           <li className="px-4">
                              <h6 className="text-primarycolor pb-2 mb-3 font-semibold text-sm relative after:absolute after:bottom-0 after:border-b after:left-0 after:w-5 after:border-grad1">North India</h6>
                           </li>
                           <li className="lg:border-b-0 border-b  w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Rajasthan
                              </Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Himachal Pradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarakhand</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarpradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >More...</Link>
                           </li>
                        </ul>
                     </div>
                  </li>
                  <li className="groupi2 w-50 lg:border-b-0 border-b flex">
                     <Link 
                        className="text-primarycolor text-sm cursor-pointer bg-light-gray-200 hover:bg-gray-400 hover:font-semibold pt-8 px-4 flex whitespace-no-wrap w-1/5 relative hover:after:absolute hover:after:right-0 hover:after:bg-orangecolor hover:after:w-0.5 hover:after:h-3 hover:after:top-9"
                        to="#"
                        >Packages
                     </Link>
                     <div className=" w-full hidden h-full  flex group-inner:flex top-0 absolute text-gray-700 py-8 px-2 lg:px-4 top-15 left-auto right-0 w-4/5 groupinner2 bg-white border-l border-bordergray-200">
                        <ul className="px-2 ">
                           <li className="px-4">
                              <h6 className="text-primarycolor pb-2 mb-3 font-semibold text-sm relative after:absolute after:bottom-0 after:border-b after:left-0 after:w-5 after:border-grad1">North India</h6>
                           </li>
                           <li className="lg:border-b-0 border-b  w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Rajasthan 1
                              </Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Himachal Pradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarakhand</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarpradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >More...</Link>
                           </li>
                        </ul>
                        <ul className="px-2 ">
                           <li className="px-4">
                              <h6 className="text-primarycolor pb-2 mb-3 font-semibold text-sm relative after:absolute after:bottom-0 after:border-b after:left-0 after:w-5 after:border-grad1">North India</h6>
                           </li>
                           <li className="lg:border-b-0 border-b  w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Rajasthan
                              </Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Himachal Pradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarakhand</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarpradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >More...</Link>
                           </li>
                        </ul>
                        <ul className="px-2 ">
                           <li className="px-4">
                              <h6 className="text-primarycolor pb-2 mb-3 font-semibold text-sm relative after:absolute after:bottom-0 after:border-b after:left-0 after:w-5 after:border-grad1">North India</h6>
                           </li>
                           <li className="lg:border-b-0 border-b  w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Rajasthan
                              </Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Himachal Pradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarakhand</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarpradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >More...</Link>
                           </li>
                        </ul>
                        <ul className="px-2 ">
                           <li className="px-4">
                              <h6 className="text-primarycolor pb-2 mb-3 font-semibold text-sm relative after:absolute after:bottom-0 after:border-b after:left-0 after:w-5 after:border-grad1">North India</h6>
                           </li>
                           <li className="lg:border-b-0 border-b  w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Rajasthan
                              </Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Himachal Pradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarakhand</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarpradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >More...</Link>
                           </li>
                        </ul>
                     </div>
                  </li>
                  <li className="groupi2 w-50 lg:border-b-0 border-b flex">
                     <Link 
                        className=" text-primarycolor text-sm cursor-pointer bg-light-gray-200 hover:bg-gray-400 hover:font-semibold pt-8 pb-8 px-4 flex whitespace-no-wrap w-1/5 relative hover:after:absolute hover:after:right-0 hover:after:bg-orangecolor hover:after:w-0.5 hover:after:h-3 hover:after:top-9"
                        to="#"
                        >Weekend Getaways</Link>
                     <div className=" w-full hidden h-full  flex group-inner:flex top-0 absolute text-gray-700 py-8 px-2 lg:px-4 top-15 left-auto right-0 w-4/5 groupinner2 bg-white border-l border-bordergray-200">
                        <ul className="px-2 ">
                           <li className="px-4">
                              <h6 className="text-primarycolor pb-2 mb-3 font-semibold text-sm relative after:absolute after:bottom-0 after:border-b after:left-0 after:w-5 after:border-grad1">North India</h6>
                           </li>
                           <li className="lg:border-b-0 border-b  w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Rajasthan 1
                              </Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Himachal Pradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarakhand</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarpradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >More...</Link>
                           </li>
                        </ul>
                        <ul className="px-2 ">
                           <li className="px-4">
                              <h6 className="text-primarycolor pb-2 mb-3 font-semibold text-sm relative after:absolute after:bottom-0 after:border-b after:left-0 after:w-5 after:border-grad1">North India</h6>
                           </li>
                           <li className="lg:border-b-0 border-b  w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Rajasthan
                              </Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Himachal Pradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarakhand</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarpradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >More...</Link>
                           </li>
                        </ul>
                        <ul className="px-2 ">
                           <li className="px-4">
                              <h6 className="text-primarycolor pb-2 mb-3 font-semibold text-sm relative after:absolute after:bottom-0 after:border-b after:left-0 after:w-5 after:border-grad1">North India</h6>
                           </li>
                           <li className="lg:border-b-0 border-b  w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Rajasthan
                              </Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Himachal Pradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarakhand</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >Uttarpradesh</Link>
                           </li>
                           <li className="w-100">
                              <Link 
                                 className=" text-primarycolor text-sm cursor-pointer pb-1 px-4 block whitespace-no-wrap"
                                 to="#"
                                 >More...</Link>
                           </li>
                        </ul>
                     </div>
                  </li>
               </ul>
            </li>
            <li className="nav-item border-b-1 lg:border-b-2 border-white py-0 lg:py-5 hover:border-b-2 hover:border-grad1">
               <Link to="/Hotels"
                  className="justify-between lg:justify-start text-primarycolor font-semibold text-sm py-3 lg:py-2 px-4 inline-flex w-full lg:w-auto items-center cursor-pointer"
                  >
               Hotels
               </Link>
            </li>
            <li className="nav-item border-b-1 border-white lg:border-b-2 py-0 lg:py-5 hover:border-b-2 hover:border-grad1">
               <Link 
                  className="justify-between lg:justify-start text-primarycolor font-semibold text-sm py-3 lg:py-2 px-4 inline-flex w-full lg:w-auto items-center cursor-pointer"
                  to="#"
                  >
               Flight
               </Link>
            </li>
            <li className="group inline-block relative border-b-1 border-white lg:border-b-2  py-0 lg:py-5 hover:border-b-2 hover:border-grad1">
               <Link 
                  className="justify-between lg:justify-start text-primarycolor font-semibold text-sm py-3 lg:py-2 px-4 inline-flex w-full lg:w-auto items-center cursor-pointer"
                  to="#"
                  >
                  Weddings
                  <IcDropdown/>
               </Link>
               <ul className="w-full static lg:absolute hidden text-gray-700 pt-1 px-2 lg:px-0 group-hover:block bg-white ">
                  <li className="lg:border-b-0 border-b ">
                     <Link 
                        className="text-primarycolor text-sm cursor-pointer hover:bg-gray-400 py-1 px-4 block whitespace-no-wrap"
                        to="#"
                        >Weddings 1</Link>
                  </li>
                  <li className="lg:border-b-0 border-b ">
                     <Link 
                        className="text-primarycolor text-sm cursor-pointer hover:bg-gray-400 py-2 lg:py-1 px-4 block whitespace-no-wrap"
                        to="#"
                        >Weddings 2</Link>
                  </li>
                  <li className="">
                     <Link 
                        className=" text-primarycolor text-sm cursor-pointer hover:bg-gray-400 py-1 px-4 block whitespace-no-wrap"
                        to="#"
                        >Weddings 3</Link>
                  </li>
               </ul>
            </li>
            <li className="group inline-block relative border-b-1 border-white lg:border-b-2  py-0 lg:py-5 hover:border-b-2 hover:border-grad1">
               <Link 
                  className="justify-between lg:justify-start text-primarycolor font-semibold text-sm py-3 lg:py-2 px-4 inline-flex w-full lg:w-auto items-center cursor-pointer"
                  to="#"
                  >
                  Mics
                  <IcDropdown/>
               </Link>
               <ul className="w-full static lg:absolute hidden text-gray-700 pt-1 px-2 lg:px-0 group-hover:block bg-white ">
                  <li className="lg:border-b-0 border-b ">
                     <Link 
                        className="text-primarycolor text-sm cursor-pointer hover:bg-gray-400 py-1 px-4 block whitespace-no-wrap"
                        to="#"
                        >Mics 1</Link>
                  </li>
                  <li className="lg:border-b-0 border-b ">
                     <Link 
                        className="text-primarycolor text-sm cursor-pointer hover:bg-gray-400 py-2 lg:py-1 px-4 block whitespace-no-wrap"
                        to="#"
                        >Mics 2</Link>
                  </li>
                  <li className="">
                     <Link 
                        className=" text-primarycolor text-sm cursor-pointer hover:bg-gray-400 py-1 px-4 block whitespace-no-wrap"
                        to="#"
                        >Mics 3</Link>
                  </li>
               </ul>
            </li>
            <li className="group inline-block relative border-b-1 border-white lg:border-b-2  py-0 lg:py-5 hover:border-b-2 hover:border-grad1">
               <Link 
                  className="justify-between lg:justify-start text-primarycolor font-semibold text-sm py-3 lg:py-2 px-4 inline-flex w-full lg:w-auto items-center cursor-pointer"
                  to="#"
                  >
                  Medical Tourism
                  <IcDropdown/>
               </Link>
               <ul className="w-full static lg:absolute hidden text-gray-700 pt-1 px-2 lg:px-0 group-hover:block bg-white ">
                  <li className="lg:border-b-0 border-b ">
                     <Link 
                        className="text-primarycolor text-sm cursor-pointer hover:bg-gray-400 py-1 px-4 block whitespace-no-wrap"
                        to="#"
                        >medical 1</Link>
                  </li>
                  <li className="lg:border-b-0 border-b ">
                     <Link 
                        className="text-primarycolor text-sm cursor-pointer hover:bg-gray-400 py-2 lg:py-1 px-4 block whitespace-no-wrap"
                        to="#"
                        >medical 2</Link>
                  </li>
                  <li className="">
                     <Link 
                        className=" text-primarycolor text-sm cursor-pointer hover:bg-gray-400 py-1 px-4 block whitespace-no-wrap"
                        to="#"
                        >medical 3</Link>
                  </li>
               </ul>
            </li>
         </ul>
         <ul className="hidden lg:flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item relative after:absolute after:bg-orangecolor after:h-1 after:w-full after:-bottom-1.5 after:left-0 py-4">
               <Link  className="py-2  flex items-center font-semibold text-sm">
                  <Icrighticon/>
                  TMI Review
               </Link>
            </li>
            <li className="nav-item flex items-center ml-6 mr-4 py-4 relative">
               <Link onClick={onPresFirstButton} className="flex h-10 w-10 bg-orange-200 rounded-full flex items-center justify-center cursor-pointer">
                  <Icsearch/>
               </Link>
            </li>
            <li className="nav-item flex items-center py-4">
               <button
                  className="transition duration-200 transition duration-200 buttonFill flex bg-orangecolor hover:bg-white hover:text-orangecolor border border-orangecolor-200 text-white font-medium h-10 flex items-center px-5 rounded-full text-sm"
                  onClick={() =>
                  setShowModal(true)}
                  >
                  <Icsignin/>
                  Sign in
               </button>
            </li>
         </ul>
      </div>
      {/* End dasktop menu */}
      {/* Mobile Nav */}
      <div className={"block lg:hidden absolute top-0 left-0 min-h-screen min-w-full z-[100] bg-white px-7 py-6" + (navbarOpen ? " block" : " hidden")}
      id="example-navbar-danger"
      >
      <div className="flex justify-between items-center">
         <button
            className="text-primarcolor cursor-pointer text-xl leading-none  rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() =>
            {setNavbarOpen(!navbarOpen);  setActiveStep3(true); setActive(true); setTmi(true)}}
            >
            <IcCloseMenu/>
         </button>
         <div className="flex items-center">
            <Link  to="/">
               <IcHomeO/>
            </Link>
            <Link onClick={onPresFirstButton} to="#"  className="flex h-10 w-10 bg-orange-200 rounded-full flex items-center justify-center cursor-pointer mx-4">
               <Icsearch/>
            </Link>
            <button
               className="buttonFill flex bg-orangecolor hover:bg-white hover:text-orangecolor border border-orangecolor-200 text-white font-medium h-10 flex items-center px-3 md:px-5 rounded-full text-sm"
               onClick={() =>
               setShowModal(true)}
               >
               <Icsignin/>
               Sign in
            </button>
         </div>
      </div>
      <div className="navmenu mt-10">
      <div className={isActive ? "block" : "block"}>
         <ul className="step_1">
            <li onClick={handleToggle}>
               <Link 
                  
                  className="justify-between lg:justify-start text-primarycolor font-semibold text-sm py-4 px-1 inline-flex w-full lg:w-auto items-center cursor-pointer border-b border-bordergray-200">
                  Holidays
                  <Icright/>
               </Link>
            </li>
            <li>
               <Link 
                  className="justify-between lg:justify-start text-primarycolor font-semibold text-sm py-4 px-1 inline-flex w-full lg:w-auto items-center cursor-pointer border-b border-bordergray-200">
                  Hotels
                  <Icright/>
               </Link>
            </li>
            <li>
               <Link 
                  className="justify-between lg:justify-start text-primarycolor font-semibold text-sm py-4 px-1 inline-flex w-full lg:w-auto items-center cursor-pointer border-b border-bordergray-200">
                  Flight
                  <Icright/>
               </Link>
            </li>
            <li>
               <Link 
                  className="justify-between lg:justify-start text-primarycolor font-semibold text-sm py-4 px-1 inline-flex w-full lg:w-auto items-center cursor-pointer border-b border-bordergray-200">
                  Wedding
                  <Icright/>
               </Link>
            </li>
            <li>
               <Link 
                  className="justify-between lg:justify-start text-primarycolor font-semibold text-sm py-4 px-1 inline-flex w-full lg:w-auto items-center cursor-pointer border-b border-bordergray-200">
                  Mics
                  <Icright/>
               </Link>
            </li>
            <li>
               <Link 
                  className="justify-between lg:justify-start text-primarycolor font-semibold text-sm py-4 px-1 inline-flex w-full lg:w-auto items-center cursor-pointer border-b border-bordergray-200">
                  Medical Tourism
                  <Icright/>
               </Link>
            </li>
            <li  onClick={handleToggletmirev}>
               <Link 
                  className="justify-between lg:justify-start text-primarycolor font-semibold text-sm py-4 px-1 inline-flex w-full lg:w-auto items-center cursor-pointer">
                  TMI Review
                  <Icright/>
               </Link>
            </li>
         </ul>
      </div>
         <div className={isActive  ? "hidden" : "block"}>
            <ul className="step_2 border-light-gray-200 absolute top-24 w-full h-full bg-white left-0 py-2 px-7">
               <li onClick={handleToggle}>
                  <Link 
                     className="lg:justify-start text-primarycolor font-semibold text-sm py-4 px-1 inline-flex w-full lg:w-auto items-center cursor-pointer border-b border-bordergray-200">
                     <div className="mr-3 rotate-180"><Icright/></div> Back
                  </Link>
               </li>
               <li onClick={handleToggleStep3}>
                  <Link 
                     className="justify-between lg:justify-start text-primarycolor font-semibold text-sm py-4 px-1 inline-flex w-full lg:w-auto items-center cursor-pointer border-b border-bordergray-200">
                     Destinations
                     <Icright/>
                  </Link>
               </li>
               <li>
                  <Link 
                     className="justify-between lg:justify-start text-primarycolor font-semibold text-sm py-4 px-1 inline-flex w-full lg:w-auto items-center cursor-pointer border-b border-bordergray-200">
                     Holiday Ideas
                     <Icright/>
                  </Link>
               </li>
               <li>
                  <Link 
                     className="justify-between lg:justify-start text-primarycolor font-semibold text-sm py-4 px-1 inline-flex w-full lg:w-auto items-center cursor-pointer border-b border-bordergray-200">
                     Packages
                     <Icright/>
                  </Link>
               </li>
               <li>
                  <Link 
                     className="justify-between lg:justify-start text-primarycolor font-semibold text-sm py-4 px-1 inline-flex w-full lg:w-auto items-center cursor-pointer border-b border-bordergray-200">
                     Weekend Getaways
                     <Icright/>
                  </Link>
               </li>
            </ul>
         </div>
         <div className={isActiveStep3 ? "hidden" : "block"}>
         <ul className="step_3 border-light-gray-200 absolute top-24 w-full h-full bg-white left-0 py-2 px-7">
            <li onClick={handleToggleStepBack}>
                  <Link 
                     className="lg:justify-start text-primarycolor font-semibold text-sm py-4 px-1 inline-flex w-full lg:w-auto items-center cursor-pointer border-b border-bordergray-200">
                     <div className="mr-3 rotate-180"><Icright/></div> Back
                  </Link>
               </li>
               <li><Link 
               className="justify-between lg:justify-start text-primarycolor font-semibold text-sm py-4 px-1 inline-flex w-full lg:w-auto items-center cursor-pointer border-b border-bordergray-200">
               North India
               </Link>
            </li>
            <li><Link 
               className="justify-between lg:justify-start text-primarycolor font-semibold text-sm py-4 px-1 inline-flex w-full lg:w-auto items-center cursor-pointer border-b border-bordergray-200">
               East India
               </Link>
            </li>
            <li><Link 
               className="justify-between lg:justify-start text-primarycolor font-semibold text-sm py-4 px-1 inline-flex w-full lg:w-auto items-center cursor-pointer border-b border-bordergray-200">
               South India
               </Link>
            </li>
            <li><Link 
               className="justify-between lg:justify-start text-primarycolor font-semibold text-sm py-4 px-1 inline-flex w-full lg:w-auto items-center cursor-pointer border-b border-bordergray-200">
               West India
               </Link>
            </li>
         </ul>
         </div>

         <div className={isTmi ? "hidden" : "block"}>
         <ul className="step_tmi border-light-gray-200 absolute top-24 w-full h-full bg-white left-0 py-2 px-7">
            <li onClick={handleToggleStepBacktmi}>
                  <Link 
                     className="lg:justify-start text-primarycolor font-semibold text-sm py-4 px-1 inline-flex w-full lg:w-auto items-center cursor-pointer border-b border-bordergray-200">
                     <div className="mr-3 rotate-180"><Icright/></div> Back
                  </Link>
               </li>
               <li><Link 
               className="justify-between lg:justify-start text-primarycolor font-semibold text-sm py-4 px-1 inline-flex w-full lg:w-auto items-center cursor-pointer border-b border-bordergray-200">
               Categories
               </Link>
            </li>
            <li><Link 
               className="justify-between lg:justify-start text-primarycolor font-semibold text-sm py-4 px-1 inline-flex w-full lg:w-auto items-center cursor-pointer border-b border-bordergray-200">
               Blog
               </Link>
            </li>
            <li className="py-4 px-1">
               <Link to="/Review-Visited-Place">
                  <button className="flex border border-bordergray-200 hover:bg-orangecolor hover:text-white hover:border-orangecolor text-orangecolor bg-white font-semibold h-10 flex items-center px-3 md:px-5 rounded-full text-sm">Write a Review</button>
               </Link>
            </li>
         </ul>
         </div>
         
      </div>
</div>
{/* End Mobile Nav */}
</div>
</nav>
{/* search-list-mobile */}
{ isShowDropdown ? 
   <div className=" flex flex-col max-w-lg mx-auto px-5 right-0 left-0 text-sm focus:outline-none absolute w-full z-[100] search_bx">
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

<div className="hidden lg:flex bradcrumb-header bg-white border-t border-bordergray-200 px-0 py-2.5 md:px-3 shadowCustom">
   <div className="container mx-auto px-4 flex items-center justify-between">
      <ul className="flex items-center space-x-2 md:space-x-10">
         <li>
            <Link  to="/" className="text-xs md:text-sm font-medium">
               <Ichomeicon/>
            </Link>
         </li>
         <li><Link  to="#" className="text-sm font-medium">Categories</Link></li>
         <li><Link  to="#" className="text-sm font-medium">Blog</Link></li>
      </ul>
         <Link to="/Review-Visited-Place">
            <button className="transition duration-500 flex border border-bordergray-200 hover:bg-orangecolor hover:text-white hover:border-orangecolor text-orangecolor bg-white font-semibold h-10 flex items-center px-3 md:px-5 rounded-full text-sm">Write a Review</button>
         </Link>
   </div>
</div>

{showModal ? (
<>
<div
   className="justify-center items-start md:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[110] outline-none focus:outline-none top-0"
   >
   <div className="relative w-full my-6 mx-auto max-w-lg h-screen scroll mt-0 md:mt-10 flex 2xl:items-center items-start">
      <div className="border-0  sm:rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-screen overflow-auto xl:h-auto">
         <div className="">
            <button
               className="p-5 ml-auto bg-transparent border-0 text-primarcolor float-right  leading-none  outline-none focus:outline-none"
               onClick={() =>
               setShowModal(false)}
               >
               <IcClose/>
            </button>
         </div>
         <div className="relative pt-0 p-4 sm:pt-2 sm:pb-6  sm:px-14 flex-auto overflow-auto">
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
                  <p className="cursor-pointer absolute text-center flex justify-center items-center bg-white right-1 top-1 w-10 h-8"
                   onClick={togglePassword}>
                     <Icshowhidden/>
                  </p>
               </div>
               <div className="flex flex-col items-center justify-between">
                  <Link  className="flex w-full justify-end my-3 font-normal text-sm text-textlightgray hover:text-primarycolor" to="#">
                  Forgot your password?
                  </Link>
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
   className="justify-center items-start md:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[110] outline-none focus:outline-none top-0"
   >
   <div className="relative w-full my-6 mx-auto max-w-lg h-screen scroll mt-0 md:mt-10 flex 2xl:items-center items-start">
      <div className="border-0  sm:rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-screen xl:h-auto">
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
         <div className="relative pt-0 p-4 sm:pt-2 sm:pb-6  sm:px-14 flex-auto overflow-auto">
            <div className="logo">
               <Logo/>
            </div>
            <h3 className="text-primarycolor text-3xl font-bold pr-6 md:pr-6 mt-6  lg:pr-16 capitalize">
               Join to unlock the best of TMI
            </h3>
            <form className="bg-white py-6">
               <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="w-full">
                     <label className="block capitalize tracking-wide text-gray-700 text-sm font-normal mb-1.5" for="grid-first-name">
                     First Name
                     </label>
                     <input className="font-outfit appearance-none border border-inputborder rounded-md w-full h-10 py-2 px-3 text-secondarycolor placeholder:text-secondarycolor font-normal leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=""/>
                  </div>
                  <div className="w-full">
                     <label className="block capitalize tracking-wide text-gray-700 text-sm font-normal mb-1.5" for="grid-first-name">
                     Last Name
                     </label>
                     <input className="font-outfit appearance-none border border-inputborder rounded-md w-full h-10 py-2 px-3 text-secondarycolor placeholder:text-secondarycolor font-normal leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=""/>
                  </div>
               </div>
               <div className="mb-4">
                  <label className="block capitalize tracking-wide text-gray-700 text-sm font-normal mb-1.5" for="grid-first-name">
                  Email
                  </label>
                  <input className="font-outfit appearance-none border border-inputborder rounded-md w-full h-10 py-2 px-3 text-secondarycolor placeholder:text-secondarycolor font-normal leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=""/>
               </div>
               <div className="mb-0 ">
                  <label className="block capitalize tracking-wide text-gray-700 text-sm font-normal mb-1.5" for="grid-first-name">
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
);
}
export default Header;