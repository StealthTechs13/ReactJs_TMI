import React from "react";
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Mobstickyfooter from '../components/MobStickyFooter';
import HotelPageBreadcrumbs from '../components/HotelPageBreadcrumbs';
import TopReviewHotel from '../components/TopReviewHotel';
import PopularCityReviewedHotels from '../components/PopularCityReviewedHotels';
import LatestAttrectiveReviewTMI from '../components/LatestAttrectiveReviewTMI';
import RecommendedForYou from '../components/RecommendedForYou';
import BestPlaceToStay from '../components/BestPlaceToStay';
import HotelNearPopularLandmark from '../components/HotelNearPopularLandmark';
import ExploreAndFindHotel from '../components/ExploreAndFindHotel';
import Faqsection from '../components/FaqSection';
import QuickLinksFooter from '../components/QuickLinksFooter';
import TopAttrectionInLocation from '../components/TopAttrectionInLocation'
function CategoryListingHotel() {
  return (
    <div className="overflow-hidden">
      <Header />
        <HotelPageBreadcrumbs/>
          <div className="py-10 md:py-12 bg-light-gray-200 border-y border-bordergray-200">
            <div className="pb-1">
              <BestPlaceToStay/>
            </div>
            <div className="px-4">
              <TopAttrectionInLocation/>
            </div>
            <div className="pt-1">
              <LatestAttrectiveReviewTMI/>
            </div>
          </div>
          <RecommendedForYou/>
          <Faqsection/>
          <QuickLinksFooter/>
      <Footer/>
      <Mobstickyfooter/>
    </div>
  );
}

export default CategoryListingHotel;
