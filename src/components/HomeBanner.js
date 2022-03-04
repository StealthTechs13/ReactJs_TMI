import React, { useState } from "react";
import '../App.css';
import '../App.scss';
import { Icsearchbar, Icsearchlist } from "./Icon";
import { Link } from 'react-router-dom';
function Homebanner() {
  const [isShowDropdown, setIsShowDropdown] = useState(false)

  const onPresFirstButton = ()=> {
    setIsShowDropdown(true)
    //setIsShowbtn1(true)
  }
return (
<div className='banner'>
  <section className="container mx-auto px-4 py-10 md:py-14">
    <div className="flex items-center flex-wrap ">
      <div className="w-full px-2 md:w-1/2">
        <h4 className="text-primarycolor text-3xl md:text-4xl font-bold mb-3">Behind every review is an experience that matters</h4>
        <p className="text-base md:text-lg text-secondarycolor ">Read reviews. Write reviews. Find companies.</p>
        <div className="relative mx-auto  mt-6 md:mt-10 z-50 h-12">
          <input autoComplete="off" onClick={onPresFirstButton} className=" z-[100] w-full border border-bordergray-200 bg-white px-5 pr-16 h-14 rounded-full text-sm focus:outline-none focus:rounded-md focus:rounded-bl-none focus:border-b-light-gray-t focus:rounded-br-none  absolute" type="search" name="search" placeholder="Where to?"/>
          <button type="submit" className="absolute z-[100] right-0 top-2  mr-2"  >
            <Icsearchbar/>
          </button>
          { isShowDropdown ? 
          <div className=" flex  text-sm focus:outline-none absolute w-full bg-white rounded-md rounded-tr-3xl  rounded-tl-3xl border border-bordergray-200 z-50 search_bx">
            <div className="opacity-90 fixed inset-0 z-1 bg-white" onClick={()=> setIsShowDropdown(!isShowDropdown)} ></div>
              <ul className="flex flex-col w-full py-4 px-3 lg:px-6 relative z-[100] bg-white rounded-md border border-bordergray-200 rounded-tr-3xl  rounded-tl-3xl">
                <li><p className="font-bold text-sm uppercase mt-2 mt-4 mb-4 text-secondarycolor">Recently Viewed</p></li>
                <li className="w-full border-b border-bordergray-200 hover:bg-bordergray-50 py-2 px-2">
                  <Link to="/Search-Result" className="cursor-pointer" onClick={()=> setIsShowDropdown(!isShowDropdown)}>
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
                  <Link to="/Search-Result" className="cursor-pointer" onClick={()=> setIsShowDropdown(!isShowDropdown)}>
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
                  <Link to="/Search-Result" className="cursor-pointer" onClick={()=> setIsShowDropdown(!isShowDropdown)}>
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
                  <Link to="/Search-Result" className="cursor-pointer" onClick={()=> setIsShowDropdown(!isShowDropdown)}>
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
                  <Link to="/Search-Result" className="cursor-pointer" onClick={()=> setIsShowDropdown(!isShowDropdown)}>
                  <div className="flex items-center">
                    <Icsearchlist/>
                    <div className="flex flex-col ml-4">
                      <h6 className="font-semibold text-base text-secondarycolor ml-2">See All result for “taj”</h6>
                    </div>
                  </div>
                  </Link>
                  </li>
              </ul>
          </div>: null}
        </div>
      </div>
      <div className="w-full px-2 md:w-1/2 hidden md:flex items-end justify-end">
        <img src="assets/img/img_homebanner.png" alt="img" />
      </div>
    </div>
  </section>
</div>
);
}
export default Homebanner;