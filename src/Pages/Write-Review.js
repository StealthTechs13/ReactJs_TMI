import React from "react";
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Mobstickyfooter from '../components/MobStickyFooter';
import HotelReviewBreadcrumbs from '../components/HotelReviewBreadcrumbs';
import RecentReviewCol from '../components/RecentReviewCol';
import WriteReviewHotelForm from '../components/WriteReviewHotelForm';

function WriteReview() {
  return (
    <div className="">
      <Header />
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5 pr-0 lg:pr-3 lg:border-r border-bordergray-200">
            <HotelReviewBreadcrumbs/>
            <WriteReviewHotelForm/>
          </div>
          <div className="w-full lg:w-2/5 pl-0 lg:pl-3">
          <RecentReviewCol/>
          </div>
        </div>
      </div>
      <Footer/>
      <Mobstickyfooter/>
    </div>
  );
}

export default WriteReview;
