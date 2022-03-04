import React from "react";
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Mobstickyfooter from '../components/MobStickyFooter';
import LuxuryTrainDetailPageBreadcrumbs from '../components/LuxuryTrainDetailPageBreadcrumbs';
import Faqsection from '../components/FaqSection';
import QuickLinksFooter from '../components/QuickLinksFooter';
import HotelImageSlider from '../components/HotelImageSlider';
import HotalDetailsTab from '../components/HotalDetailsTab';
import MostBookedProperty from '../components/MostBookedProperty';

function LuxuryTrainDetail() {
  return (
    <div className="">
      <Header />
        <LuxuryTrainDetailPageBreadcrumbs/>
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

export default LuxuryTrainDetail;
