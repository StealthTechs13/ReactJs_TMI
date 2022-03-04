import React from "react";
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Mobstickyfooter from '../components/MobStickyFooter';
import LuxuryTrainPageBreadcrumbs from '../components/LuxuryTrainPageBreadcrumbs';
import TopReviewHotel from '../components/TopReviewHotel';
import PopularCityReviewedHotels from '../components/PopularCityReviewedHotels';
import LatestHotelReviewTMI from '../components/LatestHotelReviewTMI';
import BestPlaceToStay from '../components/BestPlaceToStay';
import HotelNearPopularLandmark from '../components/HotelNearPopularLandmark';
import ExploreAndFindHotel from '../components/ExploreAndFindHotel';
import Faqsection from '../components/FaqSection';
import QuickLinksFooter from '../components/QuickLinksFooter';

function LuxuryTrainListing() {
  return (
    <div className="overflow-hidden">
      <Header />
        <LuxuryTrainPageBreadcrumbs/>
          <div className="py-8 md:py-12 bg-light-gray-200 border-y border-bordergray-200">
            <div className="pb-8 lg:pb-10">
              <div className="container mx-auto px-4">
                <p className="flex text-lg font-bold text-primarycolor">Top reviewd hotels in India on TMI Reviews</p>
              </div>
              <TopReviewHotel/>
            </div>
            <div className="pt-1">
              <div className="container mx-auto px-4">
                <p className="flex text-lg font-bold text-primarycolor">Most reviewed hotels by poular city</p>
              </div>
              <PopularCityReviewedHotels/>
            </div>
          </div>
          <LatestHotelReviewTMI/>
          <BestPlaceToStay/>
          <HotelNearPopularLandmark/>
          <ExploreAndFindHotel/>
          <Faqsection/>
          <QuickLinksFooter/>
      <Footer/>
      <Mobstickyfooter/>
    </div>
  );
}

export default LuxuryTrainListing;
