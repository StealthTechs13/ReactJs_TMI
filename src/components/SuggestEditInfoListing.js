import React, {useState} from "react";
import '../App.css';
import '../App.scss';
import { Link } from 'react-router-dom';
import {Icrighticon, IcWashroom, IcBar, IcClose, IcDelete, IcParking} from "./Icon";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
function SuggestEditInfoListing() {
  const MyMapComponent = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: -33.766294, lng: 150.719901 }}>
        {props.isMarkerShown && (
          <Marker position={{ lat: -33.766294, lng: 150.719901 }} />
        )}
      </GoogleMap>
    ))
  );
  const [showModal4, setShowModal4] = React.useState(false);
  const [showModal3, setShowModal3] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
return (
    <section className="px-0 bg-white mt-8 lg:mt-0 mb-2 lg:mb-0">
          <div className="form">
            <form className="">
              <div className="w-full mb-4 lg:mb-6">
                <div className="flex w-full pr-3 lg:text-base font-bold border-b border-bordergray-200 pb-4 mb-7 mt-2">General Information</div>
                <div className="w-full grid lg:grid-cols-2 lg:gap-8">
                  <div className="w-full form-field flex flex-col mb-4  ">
                    <label className="text-sm font-normal text-primarylight-333 mb-2">Enter place name</label>
                    <input type="text" className="text-sm border border-bordergray-200 p-2 w-full text-light-gray-t focus:outline-none" placeholder="Enter place name"/>
                  </div>
                  <div className="w-full form-field flex flex-col mb-4">
                    <label className="text-sm font-normal text-primarylight-333 mb-2">Add phone number</label>
                    <input type="number" className="text-sm border border-bordergray-200 p-2 w-full text-light-gray-t focus:outline-none" placeholder="Add phone number"/>
                  </div>
                </div>
                <div className="w-full grid lg:grid-cols-2 lg:gap-8">
                  <div className="w-full form-field flex flex-col mb-4  ">
                    <label className="text-sm font-normal text-primarylight-333 mb-2">Website</label>
                    <input type="text" className="text-sm border border-bordergray-200 p-2 w-full text-light-gray-t focus:outline-none" placeholder="Website"/>
                  </div>
                  <div className="w-full form-field flex flex-col mb-4">
                    <label className="text-sm font-normal text-primarylight-333 mb-2">Email</label>
                    <input type="email" className="text-sm border border-bordergray-200 p-2 w-full text-light-gray-t focus:outline-none" placeholder="Email"/>
                  </div>
                </div>
              </div>
              <div className="w-full mb-4 lg:mb-6">
                <div className="flex w-full pr-3 lg:text-base font-bold border-b border-bordergray-200 pb-4 mb-7 mt-2">Location</div>
                <div className="w-full grid lg:grid-cols-2 lg:gap-8">
                  <div className="w-full ">
                    <div className="form-field flex flex-col mb-4">
                      <label className="text-sm font-normal text-primarylight-333 mb-2">Street Address</label>
                      <input type="text" className="text-sm border border-bordergray-200 p-2 w-full text-light-gray-t focus:outline-none" placeholder="Street Address"/>
                    </div>
                    <div className="form-field flex flex-col mb-4">
                      <label className="text-sm font-normal text-primarylight-333 mb-2">Additional address information</label>
                      <input type="text" className="text-sm border border-bordergray-200 p-2 w-full text-light-gray-t focus:outline-none" placeholder="Additional address information"/>
                    </div>
                    <div className="form-field flex flex-col mb-4">
                      <label className="text-sm font-normal text-primarylight-333 mb-2">City/Town, State/Province/Region</label>
                      <input type="text" className="text-sm border border-bordergray-200 p-2 w-full text-light-gray-t focus:outline-none" placeholder="City/Town, State/Province/Region"/>
                    </div>
                    <div className="form-field flex flex-col mb-4">
                      <label className="text-sm font-normal text-primarylight-333 mb-2">Zip code/postal code</label>
                      <input type="text" className="text-sm border border-bordergray-200 p-2 w-full text-light-gray-t focus:outline-none" placeholder="Zip code/postal code"/>
                    </div>
                  </div>
                  <div className="w-full form-field flex flex-col mb-4">
                    <p className="text-sm text-primarylight-333 mb-2 font-semibold">Adjust map location</p>
                    <div className="rounded-2xl overflow-hidden">
                    <MyMapComponent
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAN7mwyR_B3NDDLnuwkLds1RU9IUSBklc8&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div className="h-full" />}
                        containerElement={<div className="h-44 lg:h-72" />}
                        mapElement={<div className="h-full" />}
                      />
                    </div>
                  </div>
                </div>
              </div>
             <div className="w-full mb-6 lg:mb-10">
                <div className="flex justify-between items-center w-full lg:text-base font-bold border-b border-bordergray-200 pb-4 mb-4 mt-2 ">Add open hours <button to="#"
                type="button"
                onClick={() =>
                setShowModal4(true)}
               className="transition duration-500 flex items-center text-orangecolor font-semibold rounded-full text-sm">
              <Icrighticon/> Edit Open Hours
              </button>
              </div>
              <div className="workingHours">
                <div className="flex items-center justify-between border-b border-bordergray-200 pb-4 mb-4">
                  <p className=" text-sm text-primarylight-333 font-bold w-32">Monday</p>
                  <p className="hidden lg:flex text-sm text-primarylight-333 font-normal"> Open</p>
                  <p className="text-sm text-primarylight-333 font-normal"> Open 24 Hours</p>
                </div>
                <div className="flex items-center justify-between border-b border-bordergray-200 pb-4 mb-4">
                  <p className=" text-sm text-primarylight-333 font-bold w-32">Tuesday</p>
                  <p className="hidden lg:flex text-sm text-primarylight-333 font-normal"> Open</p>
                   <p className="text-sm text-primarylight-333 font-normal"> Open 24 Hours</p>
                </div>
                <div className="flex items-center justify-between border-b border-bordergray-200 pb-4 mb-4">
                  <p className=" text-sm text-primarylight-333 font-bold w-32">Wednesday</p>
                  <p className="hidden lg:flex text-sm text-primarylight-333 font-normal"> Open</p>
                   <p className="text-sm text-primarylight-333 font-normal"> Open 24 Hours</p>
                </div>
                <div className="flex items-center justify-between border-b border-bordergray-200 pb-4 mb-4">
                  <p className=" text-sm text-primarylight-333 font-bold w-32">Thursday</p>
                  <p className="hidden lg:flex text-sm text-primarylight-333 font-normal"> Open</p>
                   <p className="text-sm text-primarylight-333 font-normal"> Open 24 Hours</p>
                </div>
              </div>
             </div>

             <div className="w-full mb-6 lg:mb-10">
                <div className="flex justify-between items-center w-full lg:text-base font-bold border-b border-bordergray-200 pb-4 mb-4 mt-2 ">Admission Tickets <button to="#"
                  type="button"
                  onClick={() =>
                  setShowModal3(true)}
                className="transition duration-500 flex items-center text-orangecolor font-semibold rounded-full text-sm">
                <Icrighticon/> Improve listing
                </button>
                </div>
                <div className="workingHours">
                    <div className="flex-col md:flex-row flex items-start md:items-center justify-between border-b border-bordergray-200 pb-4 mb-4">
                      <div className="flex flex-col text-left">
                        <p className="text-base text-primarylight-333 font-bold">Foreign tourist</p>
                        <p className="text-sm text-primarylight-333 my-1 md:my-0">Additional for visiting main mausoleum (Optional)</p>
                      </div>
                      <p className="text-sm text-primarylight-333 font-bold"> 1100/- + 200/-</p>
                    </div>
                    <div className="flex-col md:flex-row flex items-start md:items-center justify-between border-b border-bordergray-200 pb-4 mb-4">
                      <div className="flex flex-col text-left">
                        <p className="text-base text-primarylight-333 font-bold">Foreign tourist</p>
                        <p className="text-sm text-primarylight-333 my-1 md:my-0">Additional for visiting main mausoleum (Optional)</p>
                      </div>
                      <p className="text-sm text-primarylight-333 font-bold"> 1100/- + 200/-</p>
                    </div>
                    <div className="flex-col md:flex-row flex items-start md:items-center justify-between border-b border-bordergray-200 pb-4 mb-4">
                      <div className="flex flex-col text-left">
                        <p className="text-base text-primarylight-333 font-bold">Foreign tourist</p>
                        <p className="text-sm text-primarylight-333 my-1 md:my-0">Additional for visiting main mausoleum (Optional)</p>
                      </div>
                      <p className="text-sm text-primarylight-333 font-bold"> 1100/- + 200/-</p>
                    </div>
                </div>
              </div>
              <div className="w-full mb-6 lg:mb-10">
                <div className="flex justify-between items-center w-full lg:text-base font-bold border-b border-bordergray-200 pb-4 mb-4 mt-2 ">Admission Tickets <button
                    type="button"
                    onClick={() =>
                    setShowModal2(true)}
                    className="transition duration-500 flex items-center text-orangecolor font-semibold rounded-full text-sm mt-2 sm:mt-0">
                    <Icrighticon/> Improve listing
                  </button>
                </div>
              <div className="w-full">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <div className="flex items-center">
                      <div className="flex ">
                          <IcParking/> <p className="ml-4 font-normal text-primarycolor text-sm">Parking</p>
                      </div>
                  </div>
                  <div className="flex items-center">
                    <p className="mr-3 lg:mr-8 font-normal text-primarycolor text-sm">Yes</p>
                    <p className="ml-3 lg:ml-8 font-normal text-primarycolor text-sm">Free</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <div className="flex items-center">
                      <div className="flex ">
                        <IcBar/> <p className="ml-4 font-normal text-primarycolor text-sm">Food and Drinks</p>
                      </div>
                  </div>
                  <div className="flex items-center">
                    <p className="mr-3 lg:mr-8 font-normal text-primarycolor text-sm">Yes</p>
                    <p className="ml-3 lg:ml-8 font-normal text-primarycolor text-sm">Paid</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <div className="flex items-center">
                      <div className="flex ">
                          <IcWashroom/> <p className="ml-4 font-normal text-primarycolor text-sm">Washroom</p>
                      </div>
                  </div>
                  <div className="flex items-center">
                    <p className="mr-3 lg:mr-8 font-normal text-primarycolor text-sm">Yes</p>
                    <p className="ml-3 lg:ml-8 font-normal text-primarycolor text-sm">Paid</p>
                  </div>
                </div>
              </div>
             </div>
             <div className="w-full mb-4 lg:mb-6">
                <div className="flex w-full pr-3 lg:text-base font-bold border-b border-bordergray-200 pb-4 mb-6 mt-2">Attraction type</div>
                  <div className="w-full">
                    <div className="form-check mb-4">
                    <label className="w-full flex items-center text-textlightgray font-normal">
                      <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-4 h-4" type="checkbox"/>
                      <span className="font-normal text-primarycolor text-sm">
                      Architecture building 
                      </span>
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="w-full flex items-center text-textlightgray font-normal">
                      <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-4 h-4" type="checkbox"/>
                      <span className="font-normal text-primarycolor text-sm">
                        Historical site
                      </span>
                    </label>
                  </div>
                </div>
                <div className="w-full flex items-center mt-8">
                  <button type="button" className="transition duration-500 flex border border-orangecolor hover:bg-orangecolor hover:text-white hover:border-orangecolor text-orangecolor bg-white font-semibold h-10 w-28 flex items-center justify-center px-3 md:px-5 rounded-full text-sm"> Save </button>
                  <button type="button" className="transition duration-500 flex  hover:bg-orangecolor hover:text-white hover:border-orangecolor text-orangecolor bg-white font-semibold h-10 w-28 flex items-center justify-center px-3 md:px-5 rounded-full text-sm ml-4">Cancel</button>
                </div>
             </div>
            </form> 
          </div>

          {/* Admission Ticket*/}
          {showModal4 ? (
              <>
              <div
                className="justify-center items-start md:items-center flex fixed inset-0 z-[110] outline-none focus:outline-none top-0"
                >
                <div className="relative w-full my-6 mx-auto max-w-3xl h-screen scroll mt-0 md:mt-10 flex xl:items-center items-start">
                    <div className="border-0  sm:rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-screen overflow-auto xl:h-auto">
                      <div className="flex items-center justify-between p-5 border-b border-bordergray-200">
                        <h3 className="text-primarycolor text-md lg:text-lg pr-2 font-bold capitalize">
                          Add open hours
                        </h3>
                          <button
                            className="ml-auto bg-transparent border-0 text-primarcolor float-right  leading-none  outline-none focus:outline-none"
                            onClick={() =>
                            setShowModal4(false)}
                            >
                            <IcClose/>
                          </button>
                      </div>
                      <div className="relative px-4 py-5 sm:py-7 sm:px-7 flex-auto overflow-auto">
                          <div className="flex-col md:flex-row flex items-start md:items-center justify-between border-b border-bordergray-200 pb-4 mb-4">
                            <div className="flex flex-col text-left">
                              <p className="text-base text-primarylight-333 font-bold">Monday</p>
                              <div className="form-check mt-2">
                              <label className="w-full flex items-center text-textlightgray font-normal">
                                <input className="mr-1 md:mr-2 mt-0 border-inputborder border w-4 h-4" type="checkbox"/>
                                <span className="font-normal text-primarycolor text-sm">
                                  Open 24 Hours
                                </span>
                              </label>
                            </div>
                            </div>
                            <div className="flex flex-col text-left items-center md:text-right mt-4 md:mt-0">
                              <div className="flex items-center">
                                <input type="number" className="text-sm font-bold placeholder:font-bold border border-bordergray-200 p-2 w-28 text-center text-primarycolor focus:outline-none placeholder:text-primarycolor placeholder:font-normal mt-0 md:mt-1 rounded-full" placeholder="Open Time"></input>
                                <p className="mx-2 lg:mx-3 font-bold">to</p>
                                <input type="number" className="text-sm font-bold placeholder:font-bold border border-bordergray-200 p-2 w-28 text-center text-primarycolor focus:outline-none placeholder:text-primarycolor placeholder:font-normal mt-0 md:mt-1 rounded-full" placeholder="Close Time"></input>
                                <button type="button" className="ml-4">
                                  <IcDelete/>
                                </button>
                              </div>
                              <Link to="#" className="text-sm text-primarylight-333 font-bold flex items-start md:items-center mt-3 md:justify-end w-full"><button type="button" className="bg-orangecolor w-5 h-5 rounded-full font-outfit flex items-center justify-center text-white mr-2">+</button> Add open hours</Link>
                            </div>
                          </div>
                          <div className="flex-col md:flex-row flex items-start md:items-center justify-between border-b border-bordergray-200 pb-4 mb-4">
                            <div className="flex flex-col text-left">
                              <p className="text-base text-primarylight-333 font-bold">Monday</p>
                              <div className="form-check mt-2">
                              <label className="w-full flex items-center text-textlightgray font-normal">
                                <input className="mr-1 md:mr-2 mt-0 border-inputborder border w-4 h-4" defaultChecked type="checkbox"/>
                                <span className="font-normal text-primarycolor text-sm">
                                  Open 24 Hours
                                </span>
                              </label>
                            </div>
                            </div>
                          </div>
                          <div className="flex-col md:flex-row flex items-start md:items-center justify-between border-b border-bordergray-200 pb-4 mb-4">
                            <div className="flex flex-col text-left">
                              <p className="text-base text-primarylight-333 font-bold">Monday</p>
                              <div className="form-check mt-2">
                              <label className="w-full flex items-center text-textlightgray font-normal">
                                <input className="mr-1 md:mr-2 mt-0 border-inputborder border w-4 h-4" defaultChecked type="checkbox"/>
                                <span className="font-normal text-primarycolor text-sm">
                                  Open 24 Hours
                                </span>
                              </label>
                            </div>
                            </div>
                          </div>
                          <div className="flex-col md:flex-row flex items-start md:items-center justify-between border-b border-bordergray-200 pb-4 mb-4">
                            <div className="flex flex-col text-left">
                              <p className="text-base text-primarylight-333 font-bold">Monday</p>
                              <div className="form-check mt-2">
                              <label className="w-full flex items-center text-textlightgray font-normal">
                                <input className="mr-1 md:mr-2 mt-0 border-inputborder border w-4 h-4" defaultChecked type="checkbox"/>
                                <span className="font-normal text-primarycolor text-sm">
                                  Open 24 Hours
                                </span>
                              </label>
                            </div>
                            </div>
                          </div>
                          <div className="flex justify-center">
                          <button
                            onClick={() =>
                            setShowModal4(false)}
                             type="button" class="transition duration-500 flex  hover:bg-orangecolor hover:text-white hover:border-orangecolor text-orangecolor bg-white font-semibold h-10 w-28 flex items-center justify-center px-3 md:px-5 rounded-full text-sm mr-4">Cancel</button>
                          <button type="button" class="transition duration-500 flex border border-orangecolor hover:bg-orangecolor hover:text-white hover:border-orangecolor text-orangecolor bg-white font-semibold h-10 w-28 flex items-center justify-center px-3 md:px-5 rounded-full text-sm">Save</button>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="opacity-50 fixed inset-0 z-[100] bg-black"></div>
              </>
              ) : null}
            {/*End Admission Ticket */}

           {/* Admission Ticket*/}
           {showModal3 ? (
              <>
              <div
                className="justify-center items-start md:items-center flex fixed inset-0 z-[110] outline-none focus:outline-none top-0"
                >
                <div className="relative w-full my-6 mx-auto max-w-3xl h-screen scroll mt-0 md:mt-10 flex xl:items-center items-start">
                    <div className="border-0  sm:rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-screen overflow-auto xl:h-auto">
                      <div className="flex items-center justify-between p-5 border-b border-bordergray-200">
                        <h3 className="text-primarycolor text-md lg:text-lg pr-2 font-bold capitalize">
                        Admission Tickets
                        </h3>
                          <button
                            className="ml-auto bg-transparent border-0 text-primarcolor float-right  leading-none  outline-none focus:outline-none"
                            onClick={() =>
                            setShowModal3(false)}
                            >
                            <IcClose/>
                          </button>
                      </div>
                      <div className="relative px-4 py-5 sm:py-7 sm:px-7 flex-auto overflow-auto">
                          <div className="flex-col md:flex-row flex items-start md:items-center justify-between border-b border-bordergray-200 pb-4 mb-4">
                            <div className="flex flex-col text-left">
                              <p className="text-base text-primarylight-333 font-bold">Foreign tourist</p>
                              <p className="text-sm text-primarylight-333 my-1 md:my-0">Additional for visiting main mausoleum (Optional)</p>
                            </div>
                            <div className="flex flex-row md:flex-col text-left items-center md:text-right">
                              <p className="text-sm text-primarylight-333 font-bold  pr-2"> Ticket Fee</p>
                              <input className="text-sm font-semibold border border-bordergray-200 p-2 w-36 text-center text-primarycolor focus:outline-none placeholder:text-primarycolor placeholder:font-normal mt-0 md:mt-1 rounded-full" placeholder="Enter Fee"></input>
                            </div>
                          </div>
                          <div className="flex-col md:flex-row flex items-start md:items-center justify-between border-b border-bordergray-200 pb-4 mb-4">
                            <div className="flex flex-col text-left">
                              <p className="text-base text-primarylight-333 font-bold">Citizens of SAARC and BIMSTEC Countries</p>
                              <p className="text-sm text-primarylight-333 my-1 md:my-0">Additional for visiting main mausoleum (Optional)</p>
                            </div>
                            <div className="flex flex-row md:flex-col text-left items-center md:text-right">
                              <p className="text-sm text-primarylight-333 font-bold  pr-2"> Ticket Fee</p>
                              <input className="text-sm font-semibold border border-bordergray-200 p-2 w-36 text-center text-primarycolor focus:outline-none placeholder:text-primarycolor placeholder:font-normal mt-0 md:mt-1 rounded-full" placeholder="Enter Fee"></input>
                            </div>
                          </div>
                          <div className="flex-col md:flex-row flex items-start md:items-center justify-between border-b border-bordergray-200 pb-4 mb-4 last:border-0 last:mb-0">
                            <div className="flex flex-col text-left">
                              <p className="text-base text-primarylight-333 font-bold">Domestic/Indian/OCI Cardholder</p>
                              <p className="text-sm text-primarylight-333 my-1 md:my-0">Additional for visiting main mausoleum (Optional)</p>
                            </div>
                            <div className="flex flex-row md:flex-col text-left items-center md:text-right">
                              <p className="text-sm text-primarylight-333 font-bold  pr-2"> Ticket Fee</p>
                              <input className="text-sm font-semibold border border-bordergray-200 p-2 w-36 text-center text-primarycolor focus:outline-none placeholder:text-primarycolor placeholder:font-normal mt-0 md:mt-1 rounded-full" placeholder="Enter Fee"></input>
                            </div>
                          </div>
                          <div className="flex justify-center">
                          <button
                            onClick={() =>
                            setShowModal3(false)}
                             type="button" class="transition duration-500 flex  hover:bg-orangecolor hover:text-white hover:border-orangecolor text-orangecolor bg-white font-semibold h-10 w-28 flex items-center justify-center px-3 md:px-5 rounded-full text-sm mr-4">Cancel</button>
                          <button type="button" class="transition duration-500 flex border border-orangecolor hover:bg-orangecolor hover:text-white hover:border-orangecolor text-orangecolor bg-white font-semibold h-10 w-28 flex items-center justify-center px-3 md:px-5 rounded-full text-sm">Save</button>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="opacity-50 fixed inset-0 z-[100] bg-black"></div>
              </>
              ) : null}
            {/*End Admission Ticket */}

          {/* Amenities imporive list */}
          {showModal2 ? (
              <>
              <div
                className="justify-center items-start md:items-center flex fixed inset-0 z-[110] outline-none focus:outline-none top-0"
                >
                <div className="relative w-full my-6 mx-auto max-w-3xl h-screen scroll mt-0 md:mt-10 flex xl:items-center items-start">
                    <div className="border-0 md:rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-screen overflow-auto xl:h-auto">
                      <div className="flex items-center justify-between p-5 border-b border-bordergray-200">
                        <h3 className="text-primarycolor text-md lg:text-lg pr-2 font-bold capitalize">
                          Amenities
                        </h3>
                          <button
                            className="ml-auto bg-transparent border-0 text-primarcolor float-right  leading-none  outline-none focus:outline-none"
                            onClick={() =>
                            setShowModal2(false)}
                            >
                            <IcClose/>
                          </button>
                      </div>
                      <div className="relative px-4 py-5 sm:py-7 sm:px-7 flex-auto overflow-auto">
                          <div className="border-b border-bordergray-200 mb-4 pb-4 md:mb-8 md:pb-8 flex flex-col">
                            <div className="flex-col md:flex-row heading hidden md:flex">
                                <div className="w-full md:w-3/5 flex flex-col md:pr-2">
                                  <p className="text-sm text-primarylight-333 font-semibold ">Aminities</p>
                                </div>
                                <div className="w-full md:w-3/5 flex md:flex-col flex-row md:pr-2">
                                  <div className="w-full flex flex-col md:flex-row">
                                    <div className="w-full md:w-1/2 flex flex-col md:pr-2">
                                      <p className="text-sm text-primarylight-333 font-semibold ">Charges</p>
                                    </div>
                                    <div className="w-full md:w-1/2 flex flex-col">
                                      <p className="text-sm text-primarylight-333 font-semibold ">Amount</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-full md:w-1/5 flex items-center md:pl-4">
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row fieldard relative pr-10 pb-4 lg:pb-0 mb-6 md:mb-1 border-b border-bordergray-200 md:border-none">
                              <div className="w-full md:w-3/5 flex flex-col md:pr-2 mb-2 md:mb-0">
                                <input className="text-sm border border-bordergray-200 p-2 mr-2 w-full text-primarycolor focus:outline-none placeholder:text-primarycolor placeholder:font-normal mt-1 rounded-md" placeholder="Aminities"></input>
                              </div>
                              <div className="w-full md:w-3/5 flex md:flex-col flex-row md:pr-2 mb-2 md:mb-0">
                                <div className="w-full flex flex-col md:flex-row">
                                  <div className="w-full md:w-1/2 flex flex-col md:pr-2 mb-2 md:mb-0">
                                    <select className="text-sm border border-bordergray-200 p-2 mr-2 w-full text-primarycolor focus:outline-none mt-1 rounded-md">
                                      <option className="text-light-gray-t" disabled selected value="charges">charges</option>
                                      <option value="Free">Free</option>
                                      <option value="Paid2">Paid</option>
                                    </select>
                                  </div>
                                  <div className="w-full md:w-1/2 flex flex-col hidden">
                                    <input type="number" className="text-sm border border-bordergray-200 p-2 mr-2 w-full text-primarycolor focus:outline-none placeholder:text-primarycolor placeholder:font-normal mt-1 rounded-md" placeholder="Amount"></input>
                                  </div>
                                </div>
                              </div>
                              <div className="w-auto md:w-1/5 flex items-center md:pl-4 absolute md:static top-2 right-0">
                                <div className="flex items-center">
                                  <IcDelete/>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col md:flex-row fieldard relative pr-10 pb-4 lg:pb-0 mb-6 md:mb-1 border-b border-bordergray-200 md:border-none">
                              <div className="w-full md:w-3/5 flex flex-col md:pr-2 mb-2 md:mb-0">
                                <input className="text-sm border border-bordergray-200 p-2 mr-2 w-full text-primarycolor focus:outline-none placeholder:text-primarycolor placeholder:font-normal mt-1 rounded-md" placeholder="Aminities"></input>
                              </div>
                              <div className="w-full md:w-3/5 flex md:flex-col flex-row md:pr-2 mb-2 md:mb-0">
                                <div className="w-full flex flex-col md:flex-row">
                                  <div className="w-full md:w-1/2 flex flex-col md:pr-2 mb-2 md:mb-0">
                                    <select className="text-sm border border-bordergray-200 p-2 mr-2 w-full text-primarycolor focus:outline-none mt-1 rounded-md">
                                      <option className="text-light-gray-t" disabled selected value="charges">charges</option>
                                      <option value="Free">Free</option>
                                      <option value="Paid2">Paid</option>
                                    </select>
                                  </div>
                                  <div className="w-full md:w-1/2 flex flex-col mb-2 md:mb-0">
                                    <input type="number" className="text-sm border border-bordergray-200 p-2 mr-2 w-full text-primarycolor focus:outline-none placeholder:text-primarycolor placeholder:font-normal mt-1 rounded-md" placeholder="Amount"></input>
                                  </div>
                                </div>
                              </div>
                              <div className="w-auto md:w-1/5 flex items-center md:pl-4 absolute md:static top-2 right-0">
                                <div className="flex items-center">
                                  <IcDelete/>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col md:flex-row fieldard relative pr-10 pb-4 lg:pb-0 mb-6 md:mb-1 border-b border-bordergray-200 md:border-none">
                              <div className="w-full md:w-3/5 flex flex-col md:pr-2 mb-2 md:mb-0">
                                <input className="text-sm border border-bordergray-200 p-2 mr-2 w-full text-primarycolor focus:outline-none placeholder:text-primarycolor placeholder:font-normal mt-1 rounded-md" placeholder="Aminities"></input>
                              </div>
                              <div className="w-full md:w-3/5 flex md:flex-col flex-row md:pr-2 mb-2 md:mb-0">
                                <div className="w-full flex flex-col md:flex-row">
                                  <div className="w-full md:w-1/2 flex flex-col md:pr-2 mb-2 md:mb-0">
                                    <select className="text-sm border border-bordergray-200 p-2 mr-2 w-full text-primarycolor focus:outline-none mt-1 rounded-md">
                                      <option className="text-light-gray-t" disabled selected value="charges">charges</option>
                                      <option value="Free">Free</option>
                                      <option value="Paid2">Paid</option>
                                    </select>
                                  </div>
                                  <div className="w-full md:w-1/2 flex flex-col mb-2 md:mb-0">
                                    <input type="number" className="text-sm border border-bordergray-200 p-2 mr-2 w-full text-primarycolor focus:outline-none placeholder:text-primarycolor placeholder:font-normal mt-1 rounded-md" placeholder="Amount"></input>
                                  </div>
                                </div>
                              </div>
                              <div className="w-auto md:w-1/5 flex items-center md:pl-4 absolute md:static top-2 right-0">
                                <div className="flex items-center">
                                  <IcDelete/>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col md:flex-row fieldard relative pr-10 pb-4 lg:pb-0 mb-6 md:mb-1 border-b border-bordergray-200 md:border-none last:border-b-0 last:mb-0 last:pb-2">
                              <div className="w-full md:w-3/5 flex flex-col md:pr-2 mb-2 md:mb-0">
                                <input className="text-sm border border-bordergray-200 p-2 mr-2 w-full text-primarycolor focus:outline-none placeholder:text-primarycolor placeholder:font-normal mt-1 rounded-md" placeholder="Aminities"></input>
                              </div>
                              <div className="w-full md:w-3/5 flex md:flex-col flex-row md:pr-2 mb-2 md:mb-0">
                                <div className="w-full flex flex-col md:flex-row">
                                  <div className="w-full md:w-1/2 flex flex-col md:pr-2 mb-2 md:mb-0">
                                    <select className="text-sm border border-bordergray-200 p-2 mr-2 w-full text-primarycolor focus:outline-none mt-1 rounded-md">
                                      <option className="text-light-gray-t" disabled selected value="charges">charges</option>
                                      <option value="Free">Free</option>
                                      <option value="Paid2">Paid</option>
                                    </select>
                                  </div>
                                  <div className="w-full md:w-1/2 flex flex-col mb-2 md:mb-0">
                                    <input type="number" className="text-sm border border-bordergray-200 p-2 mr-2 w-full text-primarycolor focus:outline-none placeholder:text-primarycolor placeholder:font-normal mt-1 rounded-md" placeholder="Amount"></input>
                                  </div>
                                </div>
                              </div>
                              <div className="w-auto md:w-1/5 flex items-center md:pl-4 absolute md:static top-2 right-0">
                                <div className="flex items-center flex-col md:flex-row">
                                  <IcDelete/>
                                  <button type="button" className="bg-orangecolor w-5 h-5 rounded-full font-outfit flex items-center justify-center text-white ml-0 md:ml-4 mt-4 md:mt-0">+</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center">
                          <button
                            onClick={() =>
                            setShowModal2(false)}
                             type="button" class="transition duration-500 flex  hover:bg-orangecolor hover:text-white hover:border-orangecolor text-orangecolor bg-white font-semibold h-10 w-28 flex items-center justify-center px-3 md:px-5 rounded-full text-sm mr-4">Cancel</button>
                          <button type="button" class="transition duration-500 flex border border-orangecolor hover:bg-orangecolor hover:text-white hover:border-orangecolor text-orangecolor bg-white font-semibold h-10 w-28 flex items-center justify-center px-3 md:px-5 rounded-full text-sm">Save</button>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="opacity-50 fixed inset-0 z-[100] bg-black"></div>
              </>
              ) : null}
            {/*End Amenities imporive list */}
    </section>
);
}
export default SuggestEditInfoListing;