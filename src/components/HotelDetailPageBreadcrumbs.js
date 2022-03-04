import React, {useState} from "react";
import '../App.css';
import '../App.scss';
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { Icbreadright, } from "./Icon";
function HotelDetailPageBreadcrumbs() {
   
return (
<div className="breadcrumb">
   <div className="container mx-auto px-4 ">
      <div className="py-4">
         <div className="flex justify-between items-end">
            <div className="">
               <ul className="hidden md:flex items-center space-x-2 md:space-x-4">
                  <li><p href="#" className="text-sm font-normal text-light-gray-t">Home</p></li>
                  <li><p className="text-sm font-normal font-outfit"><Icbreadright/></p></li>
                  <li><p href="#" className="text-sm font-normal text-light-gray-t">Hotels</p></li>
                  <li><p className="text-sm font-normal font-outfit"><Icbreadright/></p></li>
                  <li><p href="#" className="text-sm font-normal text-light-gray-t">Detail</p></li>
               </ul>
               <h4 className="text-primarycolor text-3xl md:text-4xl font-bold my-3">The Oberoi Cecil, Shimla</h4>
               <div className="flex items-center">
               <ul className="flex mb-1">
                     <li className="leading-none">
                        <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                     </li>
                     <li className="leading-none">
                        <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                     </li>
                     <li className="leading-none">
                        <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                     </li>
                     <li className="leading-none">
                        <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                     </li>
                     <li className="leading-none">
                        <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                     </li>
               </ul> 
               <p className="font-normal text-xs text-secondarycolor font-outfit ml-2">1,423 reviews</p>
               </div>
               <p className="font-normal text-black mt-2">Advanced Study Road, Shimla 171004 India</p>
            </div>
            <div className="hidden lg:block w-52 text-center mt-2">
               <SemiCircleProgressBar percentage={89} showPercentValue />
               <p className="w-100 text-light-gray-t text-base mt-2">of reviewers recommend The Oberoi Cecil, Shimla</p>
            </div>
         </div>
      </div>
   </div>
</div>
);
}
export default HotelDetailPageBreadcrumbs;