import React from "react";
import '../App.css';
import '../App.scss';
import { TabGroup } from '@statikly/funk';
import TopReviewHotel from './TopReviewHotel'
function PopularCityReviewedHotels() {
  
return (
<div>
  <section className="reviewSlider tabingSlider relative">
    <div className="container mx-auto px-4">
      
      <div className="mt-5 mx-0">
      <div className="w-full">
        <TabGroup className="w-full" numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
          <TabGroup.TabList>
            <TabGroup.Tab
              index={0}
              className="mr-2 lg:mr-4 h-10 px-5 outline-none focus:outline-none sm:px-6 lg:px-10 rounded-full text-sm font-bold border border-bordergray-200 transition-colors duration-150"
              activeClassName="bg-grad1 text-white border-grad1"
              inactiveClassName="text-primarycolor"
            >
              Delhi
            </TabGroup.Tab>
            <TabGroup.Tab
              index={1}
              className="mr-2 lg:mr-4 h-10 px-5 outline-none focus:outline-none sm:px-6 lg:px-10 rounded-full text-sm font-bold border border-bordergray-200 transition-colors duration-150"
              activeClassName="bg-grad1 text-white border-grad1"
              inactiveClassName="text-primarycolor"
            >
              Mumbai
            </TabGroup.Tab>
            <TabGroup.Tab
              index={2}
              className="h-10 px-5 outline-none focus:outline-none sm:px-6 lg:px-10 rounded-full text-sm font-bold border border-bordergray-200 transition-colors duration-150"
              activeClassName="bg-grad1 text-white border-grad1"
              inactiveClassName="text-primarycolor"
            >
              Kerala
            </TabGroup.Tab>
          </TabGroup.TabList>

          <TabGroup.TabPanel
            index={0}
            className="w-full mx-0 md:-mx-2 lg:-mx-4 "
            activeClassName="opacity-100 transition duration-1000"
            inactiveClassName="absolute opacity-0"
          >
            <TopReviewHotel/>
          </TabGroup.TabPanel>
          <TabGroup.TabPanel
            index={1}
            className="w-full mx-0 md:-mx-2 lg:-mx-4 "
            activeClassName="opacity-100 transition duration-1000"
            inactiveClassName="absolute opacity-0"
          >
            <TopReviewHotel/>
          </TabGroup.TabPanel>
          <TabGroup.TabPanel
            index={2}
            className="w-full mx-0 md:-mx-2 lg:-mx-4 "
            activeClassName="opacity-100 transition duration-1000"
            inactiveClassName="absolute opacity-0"
          >
          <TopReviewHotel/>
          </TabGroup.TabPanel>
        </TabGroup>
      </div>
      </div>
    </div>
  </section>
</div>
);
}
export default PopularCityReviewedHotels;