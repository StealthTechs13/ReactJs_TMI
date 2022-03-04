import React from "react";
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Mobstickyfooter from '../components/MobStickyFooter';
import HotelDetailPageBreadcrumbs from '../components/HotelDetailPageBreadcrumbs';
import Faqsection from '../components/FaqSection';
import QuickLinksFooter from '../components/QuickLinksFooter';
import HotelImageSlider from '../components/HotelImageSlider';
import HotalDetailsTab from '../components/HotalDetailsTab';
import MostBookedProperty from '../components/MostBookedProperty';

function HotelDetail() {
  return (
    <div className="">
      <Header />
        <HotelDetailPageBreadcrumbs/>
          <HotelImageSlider/>
          <HotalDetailsTab/>
          <MostBookedProperty/>
          <Faqsection/>
          <QuickLinksFooter/>
      <Footer/>
      <Mobstickyfooter/>
    </div>
  );
}

export default HotelDetail;
