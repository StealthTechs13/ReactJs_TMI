import React, {useState} from "react";
import '../App.css';
import {IcApplicationSuccess, IcClose, IcPrimarySpinner, IcSecendorySpinner} from "../components/Icon";
import ValidationForm from '../components/ValidationForm';  
import InputRadio from '../components/InputRadio';
function Uiguidline() {
  const [showModal, setShowModal] = React.useState(false);
  const [showModal1, setShowModal1] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [isActive, setActive] = useState("false"); 
  const [isActive1, setActive1] = useState("false"); 

  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleToggle1 = () => {
    setActive1(!isActive1);
  };
  return (
    <div className="relative pb-20">
    <div className="ui-guidline">
        <div className="container px-4 mx-auto my-6">
          <h2 className="mb-12">UI Guidline</h2>
          <h3 className="text-primarycolor text-base pr-2 font-bold capitalize mb-4">Modal</h3>
          <div className="flex">
            <div className="flex items-center flex-wrap">
              <button
                  className="buttonFill flex bg-orangecolor hover:bg-white hover:text-orangecolor border border-orangecolor-200 text-white font-semibold h-10 flex items-center px-8 w-auto lg:w-44 flex justify-center rounded-full text-sm mr-2"
                  onClick={() =>
                    setShowModal(true)}
                  >
                  Ok, Excellent!
                </button>
                <button
                  className="buttonFill flex bg-orangecolor hover:bg-white hover:text-orangecolor border border-orangecolor-200 text-white font-semibold h-10 flex items-center px-8 w-auto lg:w-44 flex justify-center rounded-full text-sm ml-2"
                  onClick={() =>
                    setShowModal1(true)}
                  >
                  Refresh
                </button>
                <button
                  className="buttonFill flex bg-orangecolor hover:bg-white hover:text-orangecolor border border-orangecolor-200 text-white font-semibold h-10 flex items-center px-8 w-auto lg:w-44 flex justify-center rounded-full text-sm ml-2"
                  onClick={() =>
                    setShowModal2(true)}
                  >
                  Ok
                </button>
              </div>
              <div className="accordion">

              </div>
          </div>
          <ValidationForm/>
          <div className="mt-20">
            <h3 className="text-primarycolor text-base pr-2 font-bold capitalize mb-4">Form Fields</h3>
            <div className="flex">
                <div className="w-1/3 p-2">
                  <h3 className="text-light-gray-100 text-base pr-2 font-bold capitalize mb-4">Dropdown</h3>
                  <div className="mt-4 flex flex-col">
                      <form>
                        <div className="mb-4">
                          <select className="h-12 w-full text-sm border border-bordergray-200 p-2 text-light-gray-t focus:outline-none">
                            <option disabled selected>Place holder</option>
                            <option value="">Placeholder 2</option>
                            <option value="">Placeholder 3</option>
                            <option value="">Placeholder 4</option>
                          </select>
                        </div>
                      </form>
                  </div>
                </div>
                <div className="w-1/3 p-2">
                  <h3 className="text-light-gray-100 text-base pr-2 font-bold capitalize mb-4">INPUT</h3>
                  <div className="mt-4 flex flex-col">
                    <form>
                      <div className="mb-4">
                        <input type="text" className="h-12 w-full text-sm border border-bordergray-200 p-2 text-light-gray-t focus:outline-none"/>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="w-1/3 p-2">
                  <h3 className="text-light-gray-100 text-base pr-2 font-bold capitalize mb-4">INPUT Error</h3>
                  <div className="mt-4 flex flex-col">
                    <form>
                      <div className="mb-4">
                        <input type="email" className="h-12 w-full text-sm border border-bordergray-200 p-2 text-light-gray-t focus:outline-none"/>
                      </div>
                      <button type="button" className="buttonFill flex bg-orangecolor hover:bg-white hover:text-orangecolor border border-orangecolor-200 text-white font-semibold h-10 flex items-center px-8 w-auto lg:w-44 flex justify-center rounded-full text-sm ml-2">Submit</button>
                    </form>
                  </div>
                </div>
            </div>
          </div>
          <div className="mt-20">
            <h3 className="text-primarycolor text-base pr-2 font-bold capitalize mb-4">Button</h3>
            <div className="flex">
                <div className="w-1/4 p-2">
                  <h3 className="text-light-gray-100 text-base pr-2 font-bold capitalize mb-4">Primary Button</h3>
                  <div className="mt-4 flex flex-col">
                    <button type="button" className="transition flex bg-grad1 hover:bg-hoverorangecolor hover:text-white border text-white font-semibold h-10 flex items-center px-8 w-auto lg:w-44 flex justify-center rounded-full text-sm">Enabled</button>
                    <div className="mt-5"></div>
                    <button type="button" disabled className="transition flex bg-dropdowncolor text-white font-semibold h-10 flex items-center px-8 w-auto lg:w-44 flex justify-center rounded-full text-sm">Disabled</button>  
                    <div className="mt-5"></div>
                    <button type="button" className="transition flex bg-grad1 border-2 border-borderactive hover:bg-hoverorangecolor hover:text-white border text-white font-semibold h-10 flex items-center px-8 w-auto lg:w-44 flex justify-center rounded-full text-sm">Active</button>  
                  </div>
                </div>
                <div className="w-1/4 p-2">
                  <h3 className="text-light-gray-100 text-base pr-2 font-bold capitalize mb-4">Secendary Button</h3>
                  <div className="mt-4 flex flex-col">
                    <button type="button" className="transition flex border border-secendaryborder hover:border-grad1 text-grad1 font-semibold h-10 flex items-center px-8 w-auto lg:w-44 flex justify-center rounded-full text-sm">Enabled</button>
                    <div className="mt-5"></div>
                    <button type="button" disabled className="transition flex border border-secendaryborder text-dropdowncolor font-semibold h-10 flex items-center px-8 w-auto lg:w-44 flex justify-center rounded-full text-sm">Disabled</button>  
                    <div className="mt-5"></div>
                    <button type="button" className="transition flex border border-grad1 text-grad1 font-semibold h-10 flex items-center px-8 w-auto lg:w-44 flex justify-center rounded-full text-sm">Active</button>
                  </div>
                </div>
                <div className="w-1/4 p-2">
                  <h3 className="text-light-gray-100 text-base pr-2 font-bold capitalize mb-4">Radio & Checkbox</h3>
                  <div className="mt-4 flex ">
                    <div className="flex">
                      <InputRadio/>
                    </div>
                  </div>
                </div>
                <div className="w-1/4 p-2">
                  <h3 className="text-light-gray-100 text-base pr-2 font-bold capitalize mb-4">Loading</h3>
                  <div className="mt-4 flex flex-col">
                    <button type="button" className="transition flex bg-grad1 hover:bg-hoverorangecolor hover:text-white border text-white font-semibold h-10 flex items-center px-8 w-40 lg:w-44 flex justify-center rounded-full text-sm relative"
                      onClick={handleToggle}
                    >
                      Loading 
                        <span className={isActive  ? "hidden " : "block ml-2 absolute right-3 lg:right-5 animate-spin"}><IcPrimarySpinner/></span>
                    </button>
                    <div className="mt-5">
                    <button type="button" className="transition flex border border-secendaryborder hover:border-grad1 text-grad1 font-semibold h-10 flex items-center px-8 w-40 lg:w-44 flex justify-center rounded-full text-sm relative"
                      onClick={handleToggle1}
                    >
                      Loading 
                        <span className={isActive1  ? "hidden " : "block ml-2 absolute right-3 lg:right-5 animate-spin"}><IcSecendorySpinner/></span>
                    </button>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
    {/* Thank you modal */}
      {showModal ? (
        <>
        <div
          className="justify-center items-start md:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[110] outline-none focus:outline-none top-0"
          >
          <div className="relative w-full my-6 mx-auto max-w-xs h-screen scroll mt-0 md:mt-10 flex xl:items-center items-start">
              <div className="border-0  sm:rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-screen overflow-auto xl:h-auto">
                <div className="relative py-14 px-4 sm:px-8 flex-auto overflow-auto">
                    <div className="flex justify-center">
                      <IcApplicationSuccess/>
                    </div>
                    <h3 className="text-primarycolor text-lg font-bold my-6 px-2 lg:px-6 capitalize text-center">
                      <span className="text-green-color">Great...</span>Thank you for
                        your Application.
                    </h3>
                    <p className="text-center">We sent you a mail confirmation of the successful registration. Since you will call soon</p>
                    <div className="flex justify-center mt-8">
                      <button 
                      onClick={() =>
                      setShowModal(false)}
                      type="button"
                      className="flex bg-orangecolor hover:bg-white hover:text-orangecolor border border-orangecolor-200 text-white font-semibold h-10 flex items-center px-3 md:px-5 rounded-full text-sm"
                      >
                        Ok, Excellent!
                      </button>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <div className="opacity-50 fixed inset-0 z-[100] bg-black"></div>
        </>
      ) : null}
    {/* End Thank you modal */}

{/* Server Error modal */}
    {showModal1 ? (
        <>
        <div
          className="justify-center items-start md:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[110] outline-none focus:outline-none top-0"
          >
          <div className="relative w-full my-6 mx-auto max-w-xs h-screen scroll mt-0 md:mt-10 flex xl:items-center items-start">
              <div className="border-0  sm:rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-screen overflow-auto xl:h-auto">
                <div className="relative py-14 px-4 sm:px-8 flex-auto overflow-auto">
                    <div className="flex justify-center">
                      <IcApplicationSuccess/>
                    </div>
                    <h3 className="text-primarycolor text-lg font-bold my-6 px-2 lg:px-6 capitalize text-center">
                      Server Error
                    </h3>
                    <p className="text-center">We are current experiance technical difficulties. Please try again later.</p>
                    <div className="flex justify-center mt-8">
                      <button 
                      onClick={() =>
                      setShowModal1(false)}
                      type="button"
                      className="flex bg-orangecolor hover:bg-white hover:text-orangecolor border border-orangecolor-200 text-white font-semibold h-10 flex items-center px-3 md:px-5 rounded-full text-sm"
                      >
                        Refresh
                      </button>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <div className="opacity-50 fixed inset-0 z-[100] bg-black"></div>
        </>
        ) : null}
{/*End Server Error modal */}

{/* Server Error modal */}
      {showModal2 ? (
        <>
        <div
          className="justify-center items-start md:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[110] outline-none focus:outline-none top-0"
          >
          <div className="relative w-full my-6 mx-auto max-w-xl h-screen scroll mt-0 md:mt-10 flex xl:items-center items-start">
              <div className="border-0  sm:rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-screen overflow-auto xl:h-auto">
                  <div className="flex items-center justify-between px-7 py-4 border-b border-bordergray-200">
                        <h3 className="text-primarycolor text-md lg:text-lg pr-2 font-bold capitalize">
                          Heading
                        </h3>
                          <button
                            className="ml-auto bg-transparent border-0 text-primarcolor float-right  leading-none  outline-none focus:outline-none"
                            onClick={() =>
                            setShowModal2(false)}
                            >
                            <IcClose/>
                          </button>
                      </div>
                <div className="relative py-6 px-7  flex-auto overflow-auto">
                    <h3 className="text-primarycolor text-base pr-2 font-bold capitalize mb-2">
                          Heading 2
                        </h3>
                        <p className="text-sm text-secondarycolor">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className="flex justify-center mt-12 mb-4">
                      <button 
                      onClick={() =>
                      setShowModal2(false)}
                      type="button"
                      className="flex bg-orangecolor hover:bg-white hover:text-orangecolor border border-orangecolor-200 text-white font-semibold h-10 flex items-center px-8 md:px-12 rounded-full text-sm"
                      >
                        Ok
                      </button>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <div className="opacity-50 fixed inset-0 z-[100] bg-black"></div>
        </>
        ) : null}
{/*End Server Error modal */}
    </div>
  );
}

export default Uiguidline;
