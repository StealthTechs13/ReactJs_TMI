import React from "react";
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Mobstickyfooter from '../components/MobStickyFooter';
import HotelReviewBreadcrumbs from '../components/HotelReviewBreadcrumbs';
import ReviewVisitPlace from '../components/ReviewVisitPlace';
import QuickLinksFooter from '../components/QuickLinksFooter';
function ReviewVisitedPlace() {
  return (
    <div className="">
      <Header />
      <div className="container mx-auto px-4">
            <HotelReviewBreadcrumbs/>
            <ReviewVisitPlace/>
      </div>
      <QuickLinksFooter/>
      <Footer/>
      <Mobstickyfooter/>
    </div>
  );
}

export default ReviewVisitedPlace;
