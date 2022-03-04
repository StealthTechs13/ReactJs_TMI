import React from "react";
import '../App.css';
import {IcParkingFree, IcOncallDoctor, IcSanitizersInstalled, IcFreeWiFi, Icsearchbarreview} from "./Icon";
import { TabGroup } from '@statikly/funk';
import { Link } from 'react-router-dom';
function ReviewVisitPlace() {
return (
<div className="">
   <div className="container mx-auto ">
      <div className="flex flex-col justify-center max-w-4xl mx-auto">
         <h4 className="text-primarycolor text-3xl md:text-4xl font-bold my-4 text-center">Review a place you've visited</h4>
         <div className="flex flex-col md:flex-row items-center w-full md:w-3/4 mx-auto">
            <div className="w-full md:w-1/2 md:pr-2">
               <div className="relative mx-auto mt-2 md:mt-4 z-50 h-12">
                  <input autoComplete="off" className="w-full border border-bordergray-200 bg-white px-5 pr-12 h-11 text-sm focus:outline-none absolute" type="search" name="search" placeholder="Where to?"/>
                  <button type="submit" className="absolute z-[100] right-0 top-1.5 mr-2"  >
                     <Icsearchbarreview/>
                  </button>
               </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-2">
               <div className="relative mx-auto mt-2 md:mt-4 z-50 h-12">
                  <select className="border focus:outline-none border-bordergray-200 w-full h-11 px-4">
                     <option selected disabled>All</option>
                     <option>5 Star</option>
                     <option>4 Star</option>
                     <option>3 Star</option>
                     <option>2 Star</option>
                     <option>1 Star</option>
                  </select>
               </div>
            </div>
         </div>
         <div className="visiteddplace mb-4">
            <h5 className="text-base font-bold text-primarylight-333 mt-12 mb-6">Have you been? Travellers want to see more reviews of these places.</h5>
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
);
}
export default ReviewVisitPlace;