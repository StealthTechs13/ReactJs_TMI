import React from "react";
import '../App.css';
import '../App.scss';
import { Link } from 'react-router-dom';
function ClaimHotelCol() {
return (
    <section className="rounded-2xl bg-white border border-borderlight-10 mt-4 overflow-hidden">
          <img className="rounded-t-2xl w-full h-52 object-cover" src="assets/img/claimhotel.png"/>
          <div className="pt-8 lg:pt-8 pb-8 lg:pb-10 px-6 lg:px-8 customGradPrimary">
            <div className="">
              <h5 className="text-white font-bold text-lg mb-2">Claim "The Oberoi Cecil, Shimla"</h5>
              <p className="font-normal font-normal text-white text-base">Claim this property if it is owned/managed by you. Once claimed you'll be able to update property details and respond to user's reviews.</p>
            </div>
            <div className="flex justify-center">
              <Link to="/Hotel-Review?" className="transition duration-500 buttonUnfill flex border border-orangecolor bg-white hover:bg-orangecolor hover:text-white hover:border-orangecolor text-orangecolor  font-semibold h-10 flex items-center px-4 sm:px-6 rounded-full text-sm mt-4  mx-auto">
              Claim Now
              </Link>
            </div>
          </div>
    </section>
);
}
export default ClaimHotelCol;