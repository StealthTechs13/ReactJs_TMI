import React from "react";
import '../App.css';
import '../App.scss';
import { Icbreadright,} from "./Icon";
function LuxuryTrainPageBreadcrumbs() {
return (
<div className="breadcrumb">
   <div className="container mx-auto px-4 ">
      <div className="pt-6 pb-10">
         <ul className="hidden md:flex items-center space-x-2 md:space-x-4">
            <li><p href="#" className="text-sm font-normal text-light-gray-t">Home</p></li>
            <li><p className="text-sm font-normal font-outfit"><Icbreadright/></p></li>
            <li><p href="#" className="text-sm font-normal text-light-gray-t">Luxury Train</p></li>
         </ul>
         <h4 className="text-primarycolor text-3xl md:text-4xl font-bold my-3">Luxury Train</h4>
         <p className="font-normal text-secondarycolor">Read reviews. Write reviews. Find companies.</p>
      </div>
   </div>
</div>
);
}
export default LuxuryTrainPageBreadcrumbs;