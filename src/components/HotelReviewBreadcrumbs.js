import React from "react";
import '../App.css';
import '../App.scss';
import { Icbreadright,} from "./Icon";
function HotelReviewBreadcrumbs() {
return (
<div className="breadcrumb hidden md:flex">
      <div className="py-4">
         <ul className="flex items-center space-x-2 md:space-x-4">
            <li><p href="#" className="text-sm font-normal text-light-gray-t">Home</p></li>
            <li><p className="text-sm font-normal font-outfit"><Icbreadright/></p></li>
            <li><p href="#" className="text-sm font-normal text-light-gray-t">Hotels</p></li>
         </ul>
      </div>
</div>
);
}
export default HotelReviewBreadcrumbs;