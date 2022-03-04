import React from "react";
import '../App.css';
import {IcParkingFree, IcOncallDoctor, IcSanitizersInstalled, IcFreeWiFi, IcseeDrop, IcFilter, IcClose} from "./Icon";
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import TopAttrectionLocation from '../components/TopAttrectionLocation';
function SearchResultPlacesTab() {
const [showModal, setShowModal] = React.useState(false);
const ratingExample = {
    size: 14,
    count: 5,
    isHalf: false,
    value: 0,
    color: "white",
    activeColor: "#4caf50",
    // backgroundColor:"#4caf50",
    onChange: newValue => {
    console.log(`Rating 5: new value is ${newValue}`);
}
};
return (
<div className="">
   <div className="container mx-auto ">
      <div className="flex flex-col ">
         <h4 className="text-primarycolor text-3xl md:text-4xl font-bold my-4 text-center lg:text-left">Search results matching "taj"</h4>
         <div className="mt-1 mb-4 lg:mb-10">
            <div className="flex justify-between lg:items-center flex-col lg:flex-row mb-1 lg:mb-3">
               <p className="font-semibold text-black text-sm mb-4 lg:mb-0 text-center lg:text-left">1,425 properties in shimla</p>
               <div className="sort text-sm whitespace-nowrap hidden lg:flex items-center">
                  Sort by:
                  <select className="rounded-full border focus:outline-none border-bordergray-200 w-full lg:w-48 h-10 px-4 ml-4">
                     <option selected disabled>Rating</option>
                     <option>5 Star</option>
                     <option>4 Star</option>
                     <option>3 Star</option>
                     <option>2 Star</option>
                     <option>1 Star</option>
                  </select>
               </div>
            </div>
            <div className="flex lg:hidden justify-end mb-4">
               <button
                  type="button"
                  className="text-primarycolor font-semibold text-sm flex items-center"
                  onClick={() =>
                  setShowModal(true)}
                  >
                  <span className="mr-2">
                     <IcFilter/>
                  </span>
                  Filter
               </button>
            </div>
            <div className="flex w-full flex-col lg:flex-row">
               <div className="w-full hidden lg:flex lg:w-1/4 mr-8">
                  <div className="rounded-2xl border border-bordergray-200 px-4 lg:px-5 py-4 lg:py-6 mb-4 lg:mb-5">
                     <div className="border-b border-bordergray-200 pb-2 mb-4">
                        <p className="text-black text-base font-bold mb-4">Popular</p>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           3 stars
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           4 stars
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           5 stars
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           Breakfast included
                           </span>
                           </label>
                        </div>
                     </div>
                     <div className="border-b border-bordergray-200 pb-2 mb-4">
                        <p className="text-black text-base font-bold mb-4">Brands and Properties</p>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           OYO
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           Treebo
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           Radisson
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           Campanile
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           Comfort Hotel
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <button className="flex items-center text-orangecolor font-semibold text-sm">
                              Show more 
                              <IcseeDrop/>
                           </button>
                        </div>
                     </div>
                     <div className="border-b border-bordergray-200 pb-2 mb-4">
                        <p className="text-black text-base font-bold mb-4">Amenities</p>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           Free Wifi
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           Breakfast included
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           Pool
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           Free parking
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           Pool
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <button className="flex items-center text-orangecolor font-semibold text-sm">
                              Show more 
                              <IcseeDrop/>
                           </button>
                        </div>
                     </div>
                     <div className="border-b border-bordergray-200 pb-2 mb-4">
                        <p className="text-black text-base font-bold mb-4">Distance from</p>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal text-sm">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="radio" value="The Mall" name="radio" /> The Mall
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal text-sm">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="radio" value="Jakho Temple" name="radio" /> Jakho Temple
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal text-sm">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="radio" value="Christ Church" name="radio" /> Christ Church
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal text-sm">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="radio" value="Christ Church" name="radio" /> Christ Church
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal text-sm">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="radio" value="Jakho Temple" name="radio" /> Jakho Temple
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <button className="flex items-center text-orangecolor font-semibold text-sm">
                              Show more 
                              <IcseeDrop/>
                           </button>
                        </div>
                     </div>
                     <div className="border-b border-bordergray-200 pb-2 mb-2 last:border-0">
                        <p className="text-black text-base font-bold mb-4">Traveller rating</p>
                        <div className="flex items-center ratringStar filterCol mt-3">
                           <div className="form-check ">
                              <label className="w-full flex items-center text-textlightgray font-normal">
                              <input className="mr-2 md:mr-2 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                              </label>
                           </div>
                           <ReactStars {...ratingExample} />
                           <p className="text-sm font-normal text-primarylight-333 ml-2">100</p>
                        </div>
                        <div className="flex items-center ratringStar filterCol mt-3">
                           <div className="form-check ">
                              <label className="w-full flex items-center text-textlightgray font-normal">
                              <input className="mr-2 md:mr-2 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                              </label>
                           </div>
                           <ReactStars {...ratingExample} />
                           <p className="text-sm font-normal text-primarylight-333 ml-2">& upto 200</p>
                        </div>
                        <div className="flex items-center ratringStar filterCol mt-3">
                           <div className="form-check ">
                              <label className="w-full flex items-center text-textlightgray font-normal">
                              <input className="mr-2 md:mr-2 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                              </label>
                           </div>
                           <ReactStars {...ratingExample} />
                           <p className="text-sm font-normal text-primarylight-333 ml-2">& upto 300</p>
                        </div>
                        <div className="flex items-center ratringStar filterCol mt-3">
                           <div className="form-check ">
                              <label className="w-full flex items-center text-textlightgray font-normal">
                              <input className="mr-2 md:mr-2 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                              </label>
                           </div>
                           <ReactStars {...ratingExample} />
                           <p className="text-sm font-normal text-primarylight-333 ml-2">& upto 400</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="w-full lg:w-3/4">
                  <div className="searchCard rounded-2xl border border-bordergray-200 px-4 lg:px-5 py-4 lg:py-6 mb-4 lg:mb-5">
                     <div className="flex flex-col lg:flex-row">
                        <div className="hotelImg w-full lg:w-1/3">
                           <img className="lg:min-h-[11rem] h-44 lg:h-full w-full lg:w-64 object-cover rounded-2xl" src="assets/img/explore-find-hotel.png" alt="hotel img"/>
                        </div>
                        <div className="flex flex-col ml-0 lg:ml-6 w-full lg:w-2/3">
                           <div className="flex justify-between my-4 lg:my-0">
                              <h5 className="text-base font-bold text-primarylight-333 mb-4">Taj Obroi</h5>
                              <div className="hotelRating">
                                 <ul className="flex mb-1">
                                    <li>
                                       <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                                    </li>
                                    <li>
                                       <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                                    </li>
                                    <li>
                                       <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                                    </li>
                                    <li>
                                       <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                                    </li>
                                    <li>
                                       <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                                    </li>
                                 </ul>
                                 <p className="text-xs text-right">1,423 reviews</p>
                              </div>
                           </div>
                           <div className="flex flex-col">
                              <div className="flex lg:mb-2 flex-col lg:flex-row">
                                 <div className="w-44 lg:mr-6 flex items-center mb-2 lg:mb-0">
                                    <IcParkingFree/>
                                    <p className="ml-3 text-secondarycolor">  Free parking</p>
                                 </div>
                                 <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                    <IcOncallDoctor/>
                                    <p className="ml-3 text-secondarycolor">  Free parking</p>
                                 </div>
                              </div>
                              <div className="flex lg:mb-2 flex-col lg:flex-row">
                                 <div className="w-44 lg:mr-6 flex items-center mb-2 lg:mb-0">
                                    <IcSanitizersInstalled/>
                                    <p className="ml-3 text-secondarycolor">  Sanitizers installed</p>
                                 </div>
                                 <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                    <IcFreeWiFi/>
                                    <p className="ml-3 text-secondarycolor">  Free WiFi</p>
                                 </div>
                              </div>
                           </div>
                           <div className="flex my-4 lg:mt-6 justify-center lg:justify-start">
                              <Link to="/Hotel-Review">
                              <button type="button" className="transition duration-500 flex border border-orangecolor hover:bg-orangecolor hover:text-white hover:border-orangecolor text-orangecolor bg-white font-semibold h-10 flex items-center px-4 md:px-5 rounded-full text-sm">View Detail</button>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="searchCard rounded-2xl border border-bordergray-200 px-4 lg:px-5 py-4 lg:py-6 mb-4 lg:mb-5">
                     <div className="flex flex-col lg:flex-row">
                        <div className="hotelImg w-full lg:w-1/3">
                           <img className="lg:min-h-[11rem] h-44 lg:h-full w-full lg:w-64 object-cover rounded-2xl" src="assets/img/explore-find-hotel.png" alt="hotel img"/>
                        </div>
                        <div className="flex flex-col ml-0 lg:ml-6 w-full lg:w-2/3">
                           <div className="flex justify-between my-4 lg:my-0">
                              <h5 className="text-base font-bold text-primarylight-333 mb-4">Taj Obroi</h5>
                              <div className="hotelRating">
                                 <ul className="flex mb-1">
                                    <li>
                                       <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                                    </li>
                                    <li>
                                       <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                                    </li>
                                    <li>
                                       <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                                    </li>
                                    <li>
                                       <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                                    </li>
                                    <li>
                                       <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                                    </li>
                                 </ul>
                                 <p className="text-xs text-right">1,423 reviews</p>
                              </div>
                           </div>
                           <div className="flex flex-col">
                              <div className="flex lg:mb-2 flex-col lg:flex-row">
                                 <div className="w-44 lg:mr-6 flex items-center mb-2 lg:mb-0">
                                    <IcParkingFree/>
                                    <p className="ml-3 text-secondarycolor">  Free parking</p>
                                 </div>
                                 <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                    <IcOncallDoctor/>
                                    <p className="ml-3 text-secondarycolor">  Free parking</p>
                                 </div>
                              </div>
                              <div className="flex lg:mb-2 flex-col lg:flex-row">
                                 <div className="w-44 lg:mr-6 flex items-center mb-2 lg:mb-0">
                                    <IcSanitizersInstalled/>
                                    <p className="ml-3 text-secondarycolor">  Sanitizers installed</p>
                                 </div>
                                 <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                    <IcFreeWiFi/>
                                    <p className="ml-3 text-secondarycolor">  Free WiFi</p>
                                 </div>
                              </div>
                           </div>
                           <div className="flex my-4 lg:mt-6 justify-center lg:justify-start">
                              <Link to="/Hotel-Review">
                              <button type="button" className="transition duration-500 flex border border-orangecolor hover:bg-orangecolor hover:text-white hover:border-orangecolor text-orangecolor bg-white font-semibold h-10 flex items-center px-4 md:px-5 rounded-full text-sm">View Detail</button>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="searchCard rounded-2xl border border-bordergray-200 px-4 lg:px-5 py-4 lg:py-6 mb-4 lg:mb-5">
                     <div className="flex flex-col lg:flex-row">
                        <div className="hotelImg w-full lg:w-1/3">
                           <img className="lg:min-h-[11rem] h-44 lg:h-full w-full lg:w-64 object-cover rounded-2xl" src="assets/img/explore-find-hotel.png" alt="hotel img"/>
                        </div>
                        <div className="flex flex-col ml-0 lg:ml-6 w-full lg:w-2/3">
                           <div className="flex justify-between my-4 lg:my-0">
                              <h5 className="text-base font-bold text-primarylight-333 mb-4">Taj Obroi</h5>
                              <div className="hotelRating">
                                 <ul className="flex mb-1">
                                    <li>
                                       <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                                    </li>
                                    <li>
                                       <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                                    </li>
                                    <li>
                                       <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                                    </li>
                                    <li>
                                       <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                                    </li>
                                    <li>
                                       <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                                    </li>
                                 </ul>
                                 <p className="text-xs text-right">1,423 reviews</p>
                              </div>
                           </div>
                           <div className="flex flex-col">
                              <div className="flex lg:mb-2 flex-col lg:flex-row">
                                 <div className="w-44 lg:mr-6 flex items-center mb-2 lg:mb-0">
                                    <IcParkingFree/>
                                    <p className="ml-3 text-secondarycolor">  Free parking</p>
                                 </div>
                                 <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                    <IcOncallDoctor/>
                                    <p className="ml-3 text-secondarycolor">  Free parking</p>
                                 </div>
                              </div>
                              <div className="flex lg:mb-2 flex-col lg:flex-row">
                                 <div className="w-44 lg:mr-6 flex items-center mb-2 lg:mb-0">
                                    <IcSanitizersInstalled/>
                                    <p className="ml-3 text-secondarycolor">  Sanitizers installed</p>
                                 </div>
                                 <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                    <IcFreeWiFi/>
                                    <p className="ml-3 text-secondarycolor">  Free WiFi</p>
                                 </div>
                              </div>
                           </div>
                           <div className="flex my-4 lg:mt-6 justify-center lg:justify-start">
                              <Link to="/Hotel-Review">
                              <button type="button" className="transition duration-500 flex border border-orangecolor hover:bg-orangecolor hover:text-white hover:border-orangecolor text-orangecolor bg-white font-semibold h-10 flex items-center px-4 md:px-5 rounded-full text-sm">View Detail</button>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="searchCard rounded-2xl border border-bordergray-200 px-4 lg:px-5 py-4 lg:py-6 mb-4 lg:mb-5">
                     <div className="flex flex-col lg:flex-row">
                        <div className="hotelImg w-full lg:w-1/3">
                           <img className="lg:min-h-[11rem] h-44 lg:h-full w-full lg:w-64 object-cover rounded-2xl" src="assets/img/explore-find-hotel.png" alt="hotel img"/>
                        </div>
                        <div className="flex flex-col ml-0 lg:ml-6 w-full lg:w-2/3">
                           <div className="flex justify-between my-4 lg:my-0">
                              <h5 className="text-base font-bold text-primarylight-333 mb-4">Taj Obroi</h5>
                              <div className="hotelRating">
                                 <ul className="flex mb-1">
                                    <li>
                                       <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                                    </li>
                                    <li>
                                       <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                                    </li>
                                    <li>
                                       <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                                    </li>
                                    <li>
                                       <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                                    </li>
                                    <li>
                                       <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                                    </li>
                                 </ul>
                                 <p className="text-xs text-right">1,423 reviews</p>
                              </div>
                           </div>
                           <div className="flex flex-col">
                              <div className="flex lg:mb-2 flex-col lg:flex-row">
                                 <div className="w-44 lg:mr-6 flex items-center mb-2 lg:mb-0">
                                    <IcParkingFree/>
                                    <p className="ml-3 text-secondarycolor">  Free parking</p>
                                 </div>
                                 <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                    <IcOncallDoctor/>
                                    <p className="ml-3 text-secondarycolor">  Free parking</p>
                                 </div>
                              </div>
                              <div className="flex lg:mb-2 flex-col lg:flex-row">
                                 <div className="w-44 lg:mr-6 flex items-center mb-2 lg:mb-0">
                                    <IcSanitizersInstalled/>
                                    <p className="ml-3 text-secondarycolor">  Sanitizers installed</p>
                                 </div>
                                 <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                    <IcFreeWiFi/>
                                    <p className="ml-3 text-secondarycolor">  Free WiFi</p>
                                 </div>
                              </div>
                           </div>
                           <div className="flex my-4 lg:mt-6 justify-center lg:justify-start">
                              <Link to="/Hotel-Review">
                              <button type="button" className="transition duration-500 flex border border-orangecolor hover:bg-orangecolor hover:text-white hover:border-orangecolor text-orangecolor bg-white font-semibold h-10 flex items-center px-4 md:px-5 rounded-full text-sm">View Detail</button>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="searchCard rounded-2xl border border-bordergray-200 px-4 lg:px-5 py-4 lg:py-6 mb-4 lg:mb-5">
                     <div className="flex flex-col lg:flex-row">
                        <div className="hotelImg w-full lg:w-1/3">
                           <img className="lg:min-h-[11rem] h-44 lg:h-full w-full lg:w-64 object-cover rounded-2xl" src="assets/img/explore-find-hotel.png" alt="hotel img"/>
                        </div>
                        <div className="flex flex-col ml-0 lg:ml-6 w-full lg:w-2/3">
                           <div className="flex justify-between my-4 lg:my-0">
                              <h5 className="text-base font-bold text-primarylight-333 mb-4">Taj Obroi</h5>
                              <div className="hotelRating">
                                 <ul className="flex mb-1">
                                    <li>
                                       <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                                    </li>
                                    <li>
                                       <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                                    </li>
                                    <li>
                                       <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                                    </li>
                                    <li>
                                       <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                                    </li>
                                    <li>
                                       <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                                    </li>
                                 </ul>
                                 <p className="text-xs text-right">1,423 reviews</p>
                              </div>
                           </div>
                           <div className="flex flex-col">
                              <div className="flex lg:mb-2 flex-col lg:flex-row">
                                 <div className="w-44 lg:mr-6 flex items-center mb-2 lg:mb-0">
                                    <IcParkingFree/>
                                    <p className="ml-3 text-secondarycolor">  Free parking</p>
                                 </div>
                                 <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                    <IcOncallDoctor/>
                                    <p className="ml-3 text-secondarycolor">  Free parking</p>
                                 </div>
                              </div>
                              <div className="flex lg:mb-2 flex-col lg:flex-row">
                                 <div className="w-44 lg:mr-6 flex items-center mb-2 lg:mb-0">
                                    <IcSanitizersInstalled/>
                                    <p className="ml-3 text-secondarycolor">  Sanitizers installed</p>
                                 </div>
                                 <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                    <IcFreeWiFi/>
                                    <p className="ml-3 text-secondarycolor">  Free WiFi</p>
                                 </div>
                              </div>
                           </div>
                           <div className="flex my-4 lg:mt-6 justify-center lg:justify-start">
                              <Link to="/Hotel-Review">
                              <button type="button" className="transition duration-500 flex border border-orangecolor hover:bg-orangecolor hover:text-white hover:border-orangecolor text-orangecolor bg-white font-semibold h-10 flex items-center px-4 md:px-5 rounded-full text-sm">View Detail</button>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="">
        <TopAttrectionLocation/>
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
               <div className="w-full ">
                  <div className="">
                     <div className="border-b border-bordergray-200 pb-2 mb-4">
                        <p className="text-black text-base font-bold mb-4">Popular</p>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           3 stars
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           4 stars
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           5 stars
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           Breakfast included
                           </span>
                           </label>
                        </div>
                     </div>
                     <div className="border-b border-bordergray-200 pb-2 mb-4">
                        <p className="text-black text-base font-bold mb-4">Brands and Properties</p>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           OYO
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           Treebo
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           Radisson
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           Campanile
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           Comfort Hotel
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <button className="flex items-center text-orangecolor font-semibold text-sm">
                              Show more 
                              <IcseeDrop/>
                           </button>
                        </div>
                     </div>
                     <div className="border-b border-bordergray-200 pb-2 mb-4">
                        <p className="text-black text-base font-bold mb-4">Amenities</p>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           Free Wifi
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           Breakfast included
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           Pool
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           Free parking
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                           <span className="font-normal text-primarycolor text-sm">
                           Pool
                           </span>
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <button className="flex items-center text-orangecolor font-semibold text-sm">
                              Show more 
                              <IcseeDrop/>
                           </button>
                        </div>
                     </div>
                     <div className="border-b border-bordergray-200 pb-2 mb-4">
                        <p className="text-black text-base font-bold mb-4">Distance from</p>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal text-sm">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="radio" value="The Mall" name="radio" /> The Mall
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal text-sm">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="radio" value="Jakho Temple" name="radio" /> Jakho Temple
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal text-sm">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="radio" value="Christ Church" name="radio" /> Christ Church
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal text-sm">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="radio" value="Christ Church" name="radio" /> Christ Church
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <label className="w-full flex items-center text-textlightgray font-normal text-sm">
                           <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 " type="radio" value="Jakho Temple" name="radio" /> Jakho Temple
                           </label>
                        </div>
                        <div className="form-check mb-4">
                           <button className="flex items-center text-orangecolor font-semibold text-sm">
                              Show more 
                              <IcseeDrop/>
                           </button>
                        </div>
                     </div>
                     <div className="border-b border-bordergray-200 pb-2 mb-2 last:border-0">
                        <p className="text-black text-base font-bold mb-4">Traveller rating</p>
                        <div className="flex items-center ratringStar filterCol mt-3">
                           <div className="form-check ">
                              <label className="w-full flex items-center text-textlightgray font-normal">
                              <input className="mr-2 md:mr-2 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                              </label>
                           </div>
                           <ReactStars {...ratingExample} />
                           <p className="text-sm font-normal text-primarylight-333 ml-2">100</p>
                        </div>
                        <div className="flex items-center ratringStar filterCol mt-3">
                           <div className="form-check ">
                              <label className="w-full flex items-center text-textlightgray font-normal">
                              <input className="mr-2 md:mr-2 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                              </label>
                           </div>
                           <ReactStars {...ratingExample} />
                           <p className="text-sm font-normal text-primarylight-333 ml-2">& upto 200</p>
                        </div>
                        <div className="flex items-center ratringStar filterCol mt-3">
                           <div className="form-check ">
                              <label className="w-full flex items-center text-textlightgray font-normal">
                              <input className="mr-2 md:mr-2 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                              </label>
                           </div>
                           <ReactStars {...ratingExample} />
                           <p className="text-sm font-normal text-primarylight-333 ml-2">& upto 300</p>
                        </div>
                        <div className="flex items-center ratringStar filterCol mt-3">
                           <div className="form-check ">
                              <label className="w-full flex items-center text-textlightgray font-normal">
                              <input className="mr-2 md:mr-2 mt-0 border-inputborder border w-5 h-5 " type="checkbox"/>
                              </label>
                           </div>
                           <ReactStars {...ratingExample} />
                           <p className="text-sm font-normal text-primarylight-333 ml-2">& upto 400</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="opacity-50 fixed inset-0 z-[100] bg-black"></div>
   </>
   ) : null}
   {/* Create account modal */}
</div>
);
}
export default SearchResultPlacesTab;