import React from "react";
import '../App.css';
import Header from '../components/Header';
import ReviewerBanner from '../components/Reviewer-Banner';
import ReviewerDetailTab from '../components/Reviewer-Detail-Tab';
import Footer from '../components/Footer';
import Mobstickyfooter from '../components/MobStickyFooter';


function ReviewerDetails() {
  return (
    <div className="">
      <Header />
      <ReviewerBanner/>
      <ReviewerDetailTab/>
      <Footer/>
      <Mobstickyfooter/>
    </div>
  );
}

export default ReviewerDetails;
