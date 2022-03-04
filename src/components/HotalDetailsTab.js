import React from "react";
import '../App.css';
import '../App.scss';
import { TabGroup } from '@statikly/funk';
import AmenitiesCol from './AmenitiesCol';
import AttrectionAmenitiesCol from './AttrectionAmenitiesCol';
import LocationCol from './LocationCol';
import UserReviewCol from './UserReviewCol';
import AboutOverallRating from './AboutOverallRating';
import NearbyAttraction from './NearbyAttraction';
import ForeCastLocation from './ForeCastLocation';
import ClaimHotelCol from './ClaimHotelCol';

function HotalDetailsTab() {
return (
<div>
  <section className="reviewSlider tabingSlider relative pt-10 md:pt-14 overflow-hidden">
      <div className=" mx-0">
      <div className="w-full">
      <TabGroup className="w-full" numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
      <div className="container mx-auto px-2 md:px-4">
        <div className="overflow-auto">
            <TabGroup.TabList className="inline-flex">
              <TabGroup.Tab
                index={0}
                className="mr-2 lg:mr-4 h-14 lg:h-16 px-5 outline-none focus:outline-none sm:px-6 lg:px-10 text-sm font-semibold  bg-white text-primarycolor transition-colors duration-150 hover:border-b-2 hover:border-grad1"
                activeClassName="border-b-2 border-grad1 text-primarycolor"
                inactiveClassName="text-black"
              >
                Overview
              </TabGroup.Tab>
              <TabGroup.Tab
                index={1}
                className="mr-2 lg:mr-4 h-14 lg:h-16 px-5 outline-none focus:outline-none sm:px-6 lg:px-10 text-sm font-semibold  bg-white text-primarycolor transition-colors duration-150 hover:border-b-2 hover:border-grad1"
                activeClassName="border-b-2 border-grad1 text-primarycolor"
                inactiveClassName="text-black"
              >
                Amenities
              </TabGroup.Tab>
              <TabGroup.Tab
                index={2}
                className="h-14 lg:h-16 px-5 outline-none focus:outline-none sm:px-6 lg:px-10 text-sm font-semibold  bg-white text-primarycolor transition-colors duration-150 hover:border-b-2 hover:border-grad1"
                activeClassName="border-b-2 border-grad1 text-primarycolor"
                inactiveClassName="text-black"
              >
                Location
              </TabGroup.Tab>
              <TabGroup.Tab
                index={3}
                className="h-14 lg:h-16 px-5 outline-none focus:outline-none sm:px-6 lg:px-10 text-sm font-semibold  bg-white text-primarycolor transition-colors duration-150 hover:border-b-2 hover:border-grad1"
                activeClassName="border-b-2 border-grad1"
                inactiveClassName="text-black"
              >
                Review
              </TabGroup.Tab>
            </TabGroup.TabList>
          </div>
        </div>
        <div className="border-y border-bordergray-200 bg-light-gray-200 pt-6 pb-8 lg:pt-10 lg:pb-14">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap ">
                <div className="w-full lg:w-2/3 pr-0 lg:pr-3">
                  <TabGroup.TabPanel
                    index={0}
                    className="w-full "
                    activeClassName="opacity-100 transition duration-1000"
                    inactiveClassName="absolute opacity-0"
                  >
                    {/* <AmenitiesCol/> */}
                    <AttrectionAmenitiesCol/>
                    <LocationCol/>
                    <UserReviewCol/>
                  </TabGroup.TabPanel>
                  <TabGroup.TabPanel
                    index={1}
                    className="w-full "
                    activeClassName="opacity-100 transition duration-1000"
                    inactiveClassName="absolute opacity-0"
                  >
                    <AmenitiesCol/>
                  </TabGroup.TabPanel>
                  <TabGroup.TabPanel
                    index={2}
                    className="w-full "
                    activeClassName="opacity-100 transition duration-1000"
                    inactiveClassName="absolute opacity-0"
                  >
                  <LocationCol/>
                  </TabGroup.TabPanel>
                  <TabGroup.TabPanel
                    index={3}
                    className="w-full "
                    activeClassName="opacity-100 transition duration-1000"
                    inactiveClassName="absolute opacity-0"
                  >
                  <UserReviewCol/>
                  </TabGroup.TabPanel>
                </div>

                <div className="w-full lg:w-1/3 pl-0 lg:pl-3">
                  <AboutOverallRating/>
                  <NearbyAttraction/>
                  <ForeCastLocation/>
                  <ClaimHotelCol/>
                </div>

              </div>
            </div>
        </div>
      </TabGroup>
      </div>
    </div>
  </section>
</div>
);
}

export default HotalDetailsTab;