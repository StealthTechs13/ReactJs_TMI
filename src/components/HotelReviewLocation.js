import React, {useState} from "react";
import '../App.css';
import '../App.scss';
function HotelReviewLocation() {
return (
<div className="flex items-center mb-2 lg:mb-4 pb-6 border-b border-bordergray-200">
   <div className="w-24 md:w-auto  mr-4 ">
      <img className="rounded-2xl w-16 md:w-28 h-16 md:h-28 object-cover" src="assets/img/bestplace1.png"/>
   </div>
   <div className="flex flex-col">
      <p className="text-base font-semibold text-primarylight-333">The Oberoi Cecil, Shimla</p>
      <p className="font-normal text-primarylight-333 text-sm mt-1 lg:mt-2 flex flex-col">Advanced Study Road, Shimla 171004 India</p>
   </div>
</div>
);
}
export default HotelReviewLocation;