import React from "react";
import '../App.css';
import {IcParkingFree, IcOncallDoctor, IcSanitizersInstalled, IcFreeWiFi} from "./Icon";
import { TabGroup } from '@statikly/funk';
import { Link } from 'react-router-dom';
function SearchResultTab() {
  return (
    <div className="">
      <div className="container mx-auto ">
            <div className="flex flex-col justify-center max-w-4xl mx-auto">
              <h4 className="text-primarycolor text-3xl md:text-4xl font-bold my-3 text-center">Search results matching "taj"</h4>
              <div className="mt-4 mb-4 lg:mb-10">
                <div className="w-full">
                  <TabGroup className="w-full" numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
                    <TabGroup.TabList className="overflow-auto">
                      <div className="flex md:justify-center">
                        <TabGroup.Tab
                          index={0}
                          className="whitespace-nowrap mr-2 lg:mr-4 h-9 px-4 md:px-5 outline-none focus:outline-none sm:px-4 lg:px-4 rounded-full text-sm font-medium border border-bordergray-200 bg-white  transition-colors duration-150 hover:bg-textareaimgbg hover:text-secondarycolor hover:border-light-gray-t"
                          activeClassName="bg-textareaimgbg text-secondarycolor border-light-gray-t"
                          inactiveClassName="text-primarycolor"
                        >
                          All Result
                        </TabGroup.Tab>
                        <TabGroup.Tab
                          index={1}
                          className="whitespace-nowrap mr-2 lg:mr-4 h-9 px-4 md:px-5 outline-none focus:outline-none sm:px-4 lg:px-4 rounded-full text-sm font-medium border border-bordergray-200 bg-white  transition-colors duration-150 hover:bg-textareaimgbg hover:text-secondarycolor hover:border-light-gray-t"
                          activeClassName="bg-textareaimgbg text-secondarycolor border-light-gray-t"
                          inactiveClassName="text-primarycolor"
                        >
                          Hotel
                        </TabGroup.Tab>
                        <TabGroup.Tab
                          index={2}
                          className="whitespace-nowrap mr-2 h-9 px-4 md:px-5 outline-none focus:outline-none sm:px-4 lg:px-4 rounded-full text-sm font-medium border border-bordergray-200 bg-white  transition-colors duration-150 hover:bg-textareaimgbg hover:text-secondarycolor hover:border-light-gray-t"
                          activeClassName="bg-textareaimgbg text-secondarycolor border-light-gray-t"
                          inactiveClassName="text-primarycolor"
                        >
                          Attraction
                        </TabGroup.Tab>
                        <TabGroup.Tab
                          index={3}
                          className="whitespace-nowrap mr-2 h-9 px-4 md:px-5 outline-none focus:outline-none sm:px-4 lg:px-4 rounded-full text-sm font-medium border border-bordergray-200 bg-white  transition-colors duration-150 hover:bg-textareaimgbg hover:text-secondarycolor hover:border-light-gray-t"
                          activeClassName="bg-textareaimgbg text-secondarycolor border-light-gray-t"
                          inactiveClassName="text-primarycolor"
                        >
                          Hospital
                        </TabGroup.Tab>
                      <TabGroup.Tab
                        index={4}
                        className="whitespace-nowrap h-9 px-4 md:px-5 outline-none focus:outline-none sm:px-4 lg:px-4 rounded-full text-sm font-medium border border-bordergray-200 bg-white  transition-colors duration-150 hover:bg-textareaimgbg hover:text-secondarycolor hover:border-light-gray-t"
                        activeClassName="bg-textareaimgbg text-secondarycolor border-light-gray-t"
                        inactiveClassName="text-primarycolor"
                      >
                        Airline
                      </TabGroup.Tab>
                      </div>
                    </TabGroup.TabList>
                    <div className="mt-12">
                      <TabGroup.TabPanel
                        index={0}
                        className="w-full mx-0 lg:px-6 "
                        activeClassName="opacity-100 transition duration-1000"
                        inactiveClassName="absolute opacity-0 left-0"
                      >
                        <div className="flex justify-between lg:items-center flex-col lg:flex-row mb-3">
                          <p className="font-semibold text-black text-sm mb-4 lg:mb-0">1,425 properties</p>
                          <div className="sort text-sm whitespace-nowrap flex items-center">
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
                                                <IcParkingFree/><p className="ml-3 text-secondarycolor">  Free parking</p>
                                            </div>
                                            <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                                <IcOncallDoctor/><p className="ml-3 text-secondarycolor">  Free parking</p>
                                            </div>
                                        </div>
                                        <div className="flex lg:mb-2 flex-col lg:flex-row">
                                            <div className="w-44 lg:mr-6 flex items-center mb-2 lg:mb-0">
                                                <IcSanitizersInstalled/><p className="ml-3 text-secondarycolor">  Sanitizers installed</p>
                                            </div>
                                            <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                                <IcFreeWiFi/><p className="ml-3 text-secondarycolor">  Free WiFi</p>
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
                                                <IcParkingFree/><p className="ml-3 text-secondarycolor">  Free parking</p>
                                            </div>
                                            <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                                <IcOncallDoctor/><p className="ml-3 text-secondarycolor">  Free parking</p>
                                            </div>
                                        </div>
                                        <div className="flex lg:mb-2 flex-col lg:flex-row">
                                            <div className="w-44 lg:mr-6 flex items-center mb-2 lg:mb-0">
                                                <IcSanitizersInstalled/><p className="ml-3 text-secondarycolor">  Sanitizers installed</p>
                                            </div>
                                            <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                                <IcFreeWiFi/><p className="ml-3 text-secondarycolor">  Free WiFi</p>
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
                                                <IcParkingFree/><p className="ml-3 text-secondarycolor">  Free parking</p>
                                            </div>
                                            <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                                <IcOncallDoctor/><p className="ml-3 text-secondarycolor">  Free parking</p>
                                            </div>
                                        </div>
                                        <div className="flex lg:mb-2 flex-col lg:flex-row">
                                            <div className="w-44 lg:mr-6 flex items-center mb-2 lg:mb-0">
                                                <IcSanitizersInstalled/><p className="ml-3 text-secondarycolor">  Sanitizers installed</p>
                                            </div>
                                            <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                                <IcFreeWiFi/><p className="ml-3 text-secondarycolor">  Free WiFi</p>
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
                                                <IcParkingFree/><p className="ml-3 text-secondarycolor">  Free parking</p>
                                            </div>
                                            <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                                <IcOncallDoctor/><p className="ml-3 text-secondarycolor">  Free parking</p>
                                            </div>
                                        </div>
                                        <div className="flex lg:mb-2 flex-col lg:flex-row">
                                            <div className="w-44 lg:mr-6 flex items-center mb-2 lg:mb-0">
                                                <IcSanitizersInstalled/><p className="ml-3 text-secondarycolor">  Sanitizers installed</p>
                                            </div>
                                            <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                                <IcFreeWiFi/><p className="ml-3 text-secondarycolor">  Free WiFi</p>
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
                            
                      </TabGroup.TabPanel>
                      <TabGroup.TabPanel
                        index={1}
                        className="w-full mx-0 lg:px-6 "
                        activeClassName="opacity-100 transition duration-1000"
                        inactiveClassName="absolute opacity-0 left-0"
                      > 
                         
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
                                                <IcParkingFree/><p className="ml-3 text-secondarycolor">  Free parking</p>
                                            </div>
                                            <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                                <IcOncallDoctor/><p className="ml-3 text-secondarycolor">  Free parking</p>
                                            </div>
                                        </div>
                                        <div className="flex lg:mb-2 flex-col lg:flex-row">
                                            <div className="w-44 lg:mr-6 flex items-center mb-2 lg:mb-0">
                                                <IcSanitizersInstalled/><p className="ml-3 text-secondarycolor">  Sanitizers installed</p>
                                            </div>
                                            <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                                <IcFreeWiFi/><p className="ml-3 text-secondarycolor">  Free WiFi</p>
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
                        
                      </TabGroup.TabPanel>
                      <TabGroup.TabPanel
                        index={2}
                        className="w-full mx-0 lg:px-6 "
                        activeClassName="opacity-100 transition duration-1000"
                        inactiveClassName="absolute opacity-0 left-0"
                      >
                         
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
                                                <IcParkingFree/><p className="ml-3 text-secondarycolor">  Free parking</p>
                                            </div>
                                            <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                                <IcOncallDoctor/><p className="ml-3 text-secondarycolor">  Free parking</p>
                                            </div>
                                        </div>
                                        <div className="flex lg:mb-2 flex-col lg:flex-row">
                                            <div className="w-44 lg:mr-6 flex items-center mb-2 lg:mb-0">
                                                <IcSanitizersInstalled/><p className="ml-3 text-secondarycolor">  Sanitizers installed</p>
                                            </div>
                                            <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                                <IcFreeWiFi/><p className="ml-3 text-secondarycolor">  Free WiFi</p>
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
                        
                      </TabGroup.TabPanel>
                      <TabGroup.TabPanel
                        index={3}
                        className="w-full mx-0 lg:px-6 "
                        activeClassName="opacity-100 transition duration-1000"
                        inactiveClassName="absolute opacity-0 left-0"
                      >
                         
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
                                                <IcParkingFree/><p className="ml-3 text-secondarycolor">  Free parking</p>
                                            </div>
                                            <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                                <IcOncallDoctor/><p className="ml-3 text-secondarycolor">  Free parking</p>
                                            </div>
                                        </div>
                                        <div className="flex lg:mb-2 flex-col lg:flex-row">
                                            <div className="w-44 lg:mr-6 flex items-center mb-2 lg:mb-0">
                                                <IcSanitizersInstalled/><p className="ml-3 text-secondarycolor">  Sanitizers installed</p>
                                            </div>
                                            <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                                <IcFreeWiFi/><p className="ml-3 text-secondarycolor">  Free WiFi</p>
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
                        
                      </TabGroup.TabPanel>
                      <TabGroup.TabPanel
                        index={4}
                        className="w-full mx-0 lg:px-6 "
                        activeClassName="opacity-100 transition duration-1000"
                        inactiveClassName="absolute opacity-0 left-0"
                      >
                       
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
                                                <IcParkingFree/><p className="ml-3 text-secondarycolor">  Free parking</p>
                                            </div>
                                            <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                                <IcOncallDoctor/><p className="ml-3 text-secondarycolor">  Free parking</p>
                                            </div>
                                        </div>
                                        <div className="flex lg:mb-2 flex-col lg:flex-row">
                                            <div className="w-44 lg:mr-6 flex items-center mb-2 lg:mb-0">
                                                <IcSanitizersInstalled/><p className="ml-3 text-secondarycolor">  Sanitizers installed</p>
                                            </div>
                                            <div className="w-44 lg:ml-6 flex items-center mb-2 lg:mb-0">
                                                <IcFreeWiFi/><p className="ml-3 text-secondarycolor">  Free WiFi</p>
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
                        
                      </TabGroup.TabPanel>
                    </div>
                  </TabGroup>
                </div>
              </div>
            </div>
      </div>
    </div>
  );
}

export default SearchResultTab;
